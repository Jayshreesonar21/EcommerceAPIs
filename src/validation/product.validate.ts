import { Request, Response, NextFunction } from 'express';
import { Joi, Segments } from 'celebrate';

import Product from '../models/product/product.model';

export const show = {
  params: Joi.object({
    id: Joi.number().integer().optional(),
  }),
};

export const create = {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    stock: Joi.number().integer().min(1).required(),
  },
};

export const isExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params?.id) {
      const product = await Product.findOne({ where: { id: req.params.id } });
      if (!product) {
        return res.status(404).json({ message: 'No record were found for given id', status: 404 });
      }
    }
    next();
  } catch (error) {
    return res.status(404).json({ message: 'No record were found for given id', status: 404 });
  }
};
