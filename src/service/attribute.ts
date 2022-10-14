import { Router, Request, Response, NextFunction } from 'express';

import Attribute from '../models/product/attribute.model';
import AttributeValue from '../models/product/attribute_value.model';

import { SuccessResponse } from '../utils/successResponse.handler';

export class AttributeService {
  public static async list(req: Request, res: Response) {
    try {
      const attribute = await Attribute.findAll({ include: [{ model: AttributeValue }], nest: true });

      return res.status(200).json(new SuccessResponse(true, '', 200, attribute));
    } catch (error: any) {
      return error;
    }
  }
}
