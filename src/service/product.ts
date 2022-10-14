import { Router, Request, Response, NextFunction } from 'express';

import { sequelize } from '../models';
import Product from '../models/product/product.model';
import Tag from '../models/product/tag.model';
import Category from '../models/product/category.model';
import Attribute from '../models/product/attribute.model';
import AttributeValue from '../models/product/attribute_value.model';
import Comment from '../models/product/comment.model';
import User from '../models/user/user.model';
import ProductTag from '../models/product/product_tag.model';
import ProductCategory from '../models/product/product_category.model';
import ProductAttributeValue from '../models/product/product_attribute.model';
import ProductImage from '../models/product/product_image.model';

import { SuccessResponse } from '../utils/successResponse.handler';
import { InternalError } from '../utils/error.handler';

export class ProductService {
  public static async show(req: Request, res: Response) {
    try {
      const _condition: any = {
        include: [
          {
            model: Tag,
            attributes: ['id', 'name', 'slug', 'description'],
          },
          {
            model: Category,
            attributes: ['id', 'name', 'description'],
          },
          {
            model: AttributeValue,
            include: [Attribute],
          },
          {
            model: Comment,
            include: User,
          },
          {
            model: ProductImage,
          },
        ],
      };

      if (req.params?.id) {
        _condition.where = { id: req.params.id };
      }

      const products = await Product.findAll(_condition);
      return res.status(200).json(new SuccessResponse(true, '', 200, products));
    } catch (error: any) {
      return error;
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const {
        name,
        description,
        price,
        stock,
        tagIds: tags,
        categoryIds: categories,
        attributeValueIds: attributeValues,
      } = req.body;

      const product = await Product.create({ name, description, price, stock });
      if (!product) {
        throw new InternalError('500', 'Internal Error');
      } else {
        let transac: any = undefined;
        sequelize
          .transaction({ autocommit: false })
          .then(async function (transaction) {
            transac = transaction;

            // Create product tags
            const productTags: Array<{ productId: number; tagId: number }> = tags.map((tag: number) => {
              return {
                productId: product.id,
                tagId: tag,
              };
            });

            // Create product categories
            const productCategories: Array<{ productId: number; categoryId: number }> = categories.map(
              (category: number) => {
                return {
                  productId: product.id,
                  categoryId: category,
                };
              },
            );

            // Create product attributes
            const productAttributes: Array<{ productId: number; attributeValueId: number }> = attributeValues.map(
              (attributeValue: number) => {
                return {
                  productId: product.id,
                  attributeValueId: attributeValue,
                };
              },
            );

            await ProductTag.bulkCreate(productTags, { transaction });
            await ProductCategory.bulkCreate(productCategories, { transaction });
            await ProductAttributeValue.bulkCreate(productAttributes, { transaction });

            // Completed transaction only if all operations are succeed
            transaction.commit();
            return res.status(200).json(new SuccessResponse(true, 'Product created successfully', 200));
          })
          .catch((err) => {
            transac.rollback();
            throw new InternalError('500', 'Internal Error');
          });
      }
    } catch (error: any) {
      return error;
    }
  }
}
