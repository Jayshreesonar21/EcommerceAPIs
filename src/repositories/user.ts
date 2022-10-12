import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from '../service';

export class UserRepository {
  public static async all(req: Request, res: Response) {
    try {
      return UserService.all(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async show(req: Request, res: Response) {
    try {
      return UserService.show(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      return UserService.update(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async destroy(req: Request, res: Response) {
    try {
      return UserService.destroy(req, res);
    } catch (err) {
      return err;
    }
  }
}
