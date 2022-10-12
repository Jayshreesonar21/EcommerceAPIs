import { Router, Request, Response, NextFunction } from 'express';
import { AddressService } from '../service';

export class AddressRepository {
  public static async all(req: Request, res: Response) {
    try {
      return AddressService.all(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      return AddressService.create(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async show(req: Request, res: Response) {
    try {
      return AddressService.show(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      return AddressService.update(req, res);
    } catch (err) {
      return err;
    }
  }

  public static async destroy(req: Request, res: Response) {
    try {
      return AddressService.destroy(req, res);
    } catch (err) {
      return err;
    }
  }
}
