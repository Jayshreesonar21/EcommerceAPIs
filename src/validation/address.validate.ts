import { Request, Response, NextFunction } from 'express';
import { Joi, Segments } from 'celebrate';

import { MyUserRequest } from '../interface';
import Address from '../models/user/address.model';

export const create = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    zipCode: Joi.string().required(),
  },
};

export const show = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

export const update = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    firstName: Joi.string().optional().trim(),
    lastName: Joi.string().optional().trim(),
    address: Joi.string().optional().trim(),
    city: Joi.string().optional().trim(),
    country: Joi.string().optional().trim(),
    zipCode: Joi.string().optional().trim(),
  })
    .required()
    .not({}),
};

export const destroy = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

export const isExists = async (req: MyUserRequest, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const user = req.user;

    const count = await Address.count({ where: { id, userId: user.id, isDeleted: false } });
    if (count === 0) {
      return res.status(404).json({ message: 'No record were found for given id', status: 404 });
    }
    next();
  } catch (error) {
    return res.status(404).json({ message: 'No record were found for given id', status: 404 });
  }
};
