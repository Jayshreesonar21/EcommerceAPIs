import { Router, Request, Response, NextFunction } from 'express';

import Product from '../models/product/product.model';
import Tag from '../models/product/tag.model';
import Category from '../models/product/category.model';
import Attribute from '../models/product/attribute.model';
import AttributeValue from '../models/product/attributeValue.model';

import { SuccessResponse } from '../utils/successResponse.handler';

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
      console.log(':::::::::::::: Create product ::::::::::');
    } catch (error: any) {
      return error;
    }
  }
}
