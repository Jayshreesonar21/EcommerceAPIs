import { Router, Request, Response } from 'express';
import { celebrate } from 'celebrate';

const router = Router({ mergeParams: true });

import address from './address.routes';
import { UserRepository } from '../../repositories';
import { verifyUser, isAuth } from '../../middleware';
import { show, update, isExists } from '../../validation/user.validate';

router.use('/address', address);
router.get('/list', verifyUser, isAuth(['admin']), UserRepository.all);
router.get('/:id?', verifyUser, isAuth(['admin', 'user']), celebrate(show), isExists, UserRepository.show);
router.put('/', verifyUser, isAuth(['user']), celebrate(update), isExists, UserRepository.update);
router.delete('/', verifyUser, isAuth(['user']), isExists, UserRepository.destroy);

export default router;
