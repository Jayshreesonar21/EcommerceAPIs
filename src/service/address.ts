import { Router, Request, Response, NextFunction } from 'express';
import Address from '../models/user/address.model';

import { MyUserRequest } from '../interface';
import { AuthFailureError, NotFoundError, BadRequestError, InternalError } from '../utils/error.handler';
import { SuccessResponse } from '../utils/successResponse.handler';

export class AddressService {
  public static async all(req: MyUserRequest, res: Response) {
    try {
      const addresses = await Address.findAll({
        where: { userId: req.user.id, isDeleted: false },
      });

      return res.status(200).json(new SuccessResponse(true, '', 200, addresses));
    } catch (error: any) {
      return error;
    }
  }

  public static async show(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const address = await Address.findOne({
        where: { id },
      });

      return res.status(200).json(new SuccessResponse(true, '', 200, address));
    } catch (error: any) {
      return error;
    }
  }

  public static async create(req: MyUserRequest, res: Response) {
    try {
      const payload = req.body;
      payload.userId = req.user.id;

      const address = await Address.create(payload);
      if (!address) {
        throw new InternalError('500', 'Internal Error');
      } else {
        return res.status(200).json(new SuccessResponse(true, 'Address created successfully', 200));
      }
    } catch (error: any) {
      return error;
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const payload = req.body;
      const _query = { id, isDeleted: false };

      await Address.update(payload, { where: _query });
      return res.status(200).json(new SuccessResponse(true, 'Address updated successfully !!', 200));
    } catch (error: any) {
      return error;
    }
  }

  public static async destroy(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const _delete = { isDeleted: true };
      const _query = { id, isDeleted: false };

      await Address.update(_delete, { where: _query });
      return res.status(200).json(new SuccessResponse(true, 'Address deleted successfully !!', 200));
    } catch (error: any) {
      return error;
    }
  }
}
