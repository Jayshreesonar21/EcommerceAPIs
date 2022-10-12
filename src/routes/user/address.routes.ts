import { Router, Request, Response } from 'express';
const router = Router({ mergeParams: true });

import { AddressRepository } from '../../repositories';
import { verifyUser, isAuth } from '../../middleware';
import { create, show, update, destroy, isExists } from '../../validation/address.validate';

import { celebrate } from 'celebrate';

router.get('/', verifyUser, isAuth(['user']), AddressRepository.all);
router.get('/:id', verifyUser, isAuth(['user']), celebrate(show), isExists, AddressRepository.show);
router.post('/', verifyUser, isAuth(['user']), celebrate(create), AddressRepository.create);
router.put('/:id', verifyUser, isAuth(['user']), celebrate(update), isExists, AddressRepository.update);
router.delete('/:id', verifyUser, isAuth(['user']), celebrate(destroy), isExists, AddressRepository.destroy);

export default router;
