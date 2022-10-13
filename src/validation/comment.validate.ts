import { Joi, Segments } from 'celebrate';

export const create = {
  body: {
    content: Joi.string().required(),
    rating: Joi.number().integer().min(1).max(10).optional(),
    productId: Joi.number().integer().required(),
  },
};
