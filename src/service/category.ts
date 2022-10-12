import { Router, Request, Response, NextFunction } from 'express';
import Category from '../models/product/category.model';

import { SuccessResponse } from '../utils/successResponse.handler';

export class CategoryService {
  public static async list(req: Request, res: Response) {
    try {
      const categories = await Category.findAll();
      return res.status(200).json(new SuccessResponse(true, '', 200, categories));
    } catch (error: any) {
      return error;
    }
  }
}
