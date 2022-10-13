import { Router, Request, Response, NextFunction } from 'express';
import Tag from '../models/product/tag.model';

import { SuccessResponse } from '../utils/successResponse.handler';

export class TagService {
  public static async list(req: Request, res: Response) {
    try {
      const tags = await Tag.findAll();
      return res.status(200).json(new SuccessResponse(true, '', 200, tags));
    } catch (error: any) {
      return error;
    }
  }
}
