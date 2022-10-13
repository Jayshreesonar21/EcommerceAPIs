import { Router, Request, Response, NextFunction } from 'express';
import { TagService } from '../service';

export class TagRepository {
  public static async list(req: Request, res: Response) {
    try {
      return TagService.list(req, res);
    } catch (err) {
      return err;
    }
  }
}
