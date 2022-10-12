import { Request, Response, NextFunction } from 'express';
import { Joi, Segments } from 'celebrate';

import { MyUserRequest } from '../interface';
import User from '../models/user/user.model';

export const show = {
  params: Joi.object({
    id: Joi.number().optional(),
  }),
};

export const update = {
  body: Joi.object({
    firstName: Joi.string().optional().trim(),
    lastName: Joi.string().optional().trim(),
  })
    .required()
    .not({}),
};

export const isExists = async (req: MyUserRequest, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    const id = req.params?.id ?? user.id;

    const record = await User.findOne({ where: { id, isDeleted: false }, attributes: ['id', 'email', 'role'] });
    if (!record) return res.status(404).json({ message: 'No record were found for given id', status: 404 });

    if (JSON.stringify(record.id) !== JSON.stringify(user.id) && user.role === 'user') {
      return res.status(403).json({ message: `You don't have sufficient access permission!`, status: 403 });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Unable to validate user..!', status: 400 });
  }
};
