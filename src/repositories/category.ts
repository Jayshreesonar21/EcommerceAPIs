import { Router, Request, Response, NextFunction } from 'express';
import { CategoryService } from '../service';

export class CategoryRepository {
  public static async list(req: Request, res: Response) {
    try {
      return CategoryService.list(req, res);
    } catch (err) {
      return err;
    }
  }
}
