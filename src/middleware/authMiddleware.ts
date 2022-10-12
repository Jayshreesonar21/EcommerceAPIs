import { Request, Response, NextFunction } from 'express';
import environmentConfig from '../constants/environment.constant';
import User from '../models/user/user.model';
import { MyUserRequest } from '../interface';
import jwt = require('jsonwebtoken');

export const verifyToken = () => {
  return 'Token verified';
};

export const verifyUser = async (req: MyUserRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers as any;
  if (!authorization) {
    return res.status(401).json({ message: 'Invalid Token..!', status: 401 });
  }

  const scheme = authorization.split(' ')[0];
  if (scheme !== 'Bearer') {
    return res.status(401).json({ message: 'Invalid Token..!', status: 401 });
  }
  const token = authorization.split(' ')[1];
  console.log('Token:', token);
  jwt.verify(token, environmentConfig.JWT_SECRET, async (err: any, payload: any) => {
    if (err) {
      return res.status(401).json({ message: 'Inavalid username or password..!', status: 401 });
    }
    const { id } = payload;
    const user = await User.findOne({ where: { id, isDeleted: false } });
    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: 'User not found..!', status: 401 });
    }
  });
};

export const isAuth = (roles: string | string[]) => async (req: MyUserRequest, res: Response, next: NextFunction) => {
  try {
    if (roles !== undefined) {
      roles = typeof roles === 'string' ? [roles] : roles;
      if (!roles.includes(req.user?.role)) {
        return res.status(400).json({ message: 'You have no permission..!', status: 400 });
      } else {
        next();
      }
    }
  } catch (error) {
    return res.status(400).json({ message: 'Unable to validate user..!', status: 400 });
  }
};
