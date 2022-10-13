import { Router, Request, Response } from 'express';
const router = Router({ mergeParams: true });

import { CommentRepository } from '../../repositories';
import { verifyUser, isAuth } from '../../middleware';
import { create } from '../../validation/comment.validate';

import { celebrate } from 'celebrate';

router.post('/', verifyUser, isAuth(['user']), celebrate(create), CommentRepository.create);

export default router;
