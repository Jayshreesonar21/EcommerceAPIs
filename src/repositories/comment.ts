import { Router, Request, Response, NextFunction } from 'express';
import { CommentService } from '../service';

export class CommentRepository {
  public static async create(req: Request, res: Response) {
    try {
      return CommentService.create(req, res);
    } catch (err) {
      return err;
    }
  }
}
