import { Router, Request, Response, NextFunction } from 'express';
import { AttributeService } from '../service';

export class AttributeRepository {
  public static async list(req: Request, res: Response) {
    try {
      return AttributeService.list(req, res);
    } catch (err) {
      return err;
    }
  }
}
