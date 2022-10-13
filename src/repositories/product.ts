import { Router, Request, Response, NextFunction } from 'express';
import { ProductService } from '../service';

export class ProductRepository {
  public static async show(req: Request, res: Response) {
    try {
      return ProductService.show(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      return ProductService.create(req, res);
    } catch (err) {
      return err;
    }
  }
}
