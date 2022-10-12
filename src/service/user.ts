import { Router, Request, Response, NextFunction } from 'express';

import { MyUserRequest } from '../interface';
import User from '../models/user/user.model';
import Address from '../models/user/address.model';

import { SuccessResponse } from '../utils/successResponse.handler';

export class UserService {
  public static async all(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        where: { role: 'user', isDeleted: false },
        attributes: ['id', 'firstName', 'lastName', 'email', 'role', 'createdAt'],
        include: [{ model: Address }],
      });

      return res.status(200).json(new SuccessResponse(true, '', 200, users));
    } catch (error: any) {
      return error;
    }
  }

  public static async show(req: MyUserRequest, res: Response) {
    try {
      const id = req.params?.id ?? req.user.id;

      const user = await User.findOne({
        where: { id },
        include: [{ model: Address }],
      });

      return res.status(200).json(new SuccessResponse(true, '', 200, user));
    } catch (error: any) {
      return error;
    }
  }

  public static async update(req: MyUserRequest, res: Response) {
    try {
      const id = req.user.id;
      const payload = req.body;
      const _query = { id, isDeleted: false };

      await User.update(payload, { where: _query });
      return res.status(200).json(new SuccessResponse(true, 'User data updated successfully !!', 200));
    } catch (error: any) {
      return error;
    }
  }

  public static async destroy(req: MyUserRequest, res: Response) {
    try {
      const id = req.user.id;
      const _delete = { isDeleted: true };
      const _query = { id, isDeleted: false };

      await User.update(_delete, { where: _query });
      return res.status(200).json(new SuccessResponse(true, 'User deleted successfully !!', 200));
    } catch (error: any) {
      return error;
    }
  }
}
