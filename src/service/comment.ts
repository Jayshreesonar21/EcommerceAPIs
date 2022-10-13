import { Router, Request, Response, NextFunction } from 'express';
import Comment from '../models/product/comment.model';

import { MyUserRequest } from '../interface';
import { InternalError } from '../utils/error.handler';
import { SuccessResponse } from '../utils/successResponse.handler';

export class CommentService {
  public static async create(req: MyUserRequest, res: Response) {
    try {
      const payload = req.body;
      payload.userId = req.user.id;

      const comment = await Comment.create(payload);
      if (!comment) {
        throw new InternalError('500', 'Internal Error');
      } else {
        return res.status(200).json(new SuccessResponse(true, 'Comment created successfully', 200));
      }
    } catch (error: any) {
      return error;
    }
  }
}
