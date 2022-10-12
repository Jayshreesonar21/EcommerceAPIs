import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/user/user.model';
import environmentConfig from '../constants/environment.constant';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthFailureError, NotFoundError, BadRequestError, InternalError } from '../utils/error.handler';
import { SuccessResponse } from '../utils/successResponse.handler';

export class AuthService {
  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new BadRequestError('400', 'validation failed');
      }

      const users = await User.findOne({ where: { email: email, isDeleted: false } });
      if (!users) {
        throw new NotFoundError('404', 'Not Found');
      } else {
        const passwordMatched = bcrypt.compareSync(password, users.password);
        if (!passwordMatched) {
          throw new AuthFailureError('401', 'Unauthorized');
        } else {
          const token = jwt.sign({ id: users.id, role: users.role }, environmentConfig.JWT_SECRET);
          const data = {
            email: users.email,
            role: users.role,
            token: 'Bearer ' + token,
          };
          return res.status(200).json(new SuccessResponse(true, 'Signin successfully', 200, data));
        }
      }
    } catch (error: any) {
      return error;
    }
  }

  public static async register(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password } = req.body;

      const users = await User.findOne({ where: { email: email, isDeleted: false } });
      if (users) {
        return res.status(404).json({ message: 'User already exist..!', status: 404 });
      } else {
        const hashPassword = await bcrypt.hashSync(password, 12);
        const newuser = await User.create({
          firstName,
          lastName,
          email,
          password: hashPassword,
          role: 'user',
        });
        if (!newuser) {
          throw new InternalError('500', 'Internal Error');
        } else {
          return res.status(200).json(new SuccessResponse(true, 'New user registered successfully', 200));
        }
      }
    } catch (error: any) {
      return error;
    }
  }
}
