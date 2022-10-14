import { Router } from 'express';
import { celebrate } from 'celebrate';

import category from './category.routes';
import attribute from './attribute.routes';
import tag from './tag.routes';
import comment from './comment.routes';

import { verifyUser, isAuth } from '../../middleware';
import { ProductRepository } from '../../repositories';
import { show, create, isExists } from '../../validation/product.validate';
import { Multer } from '../../utils/multer.util';

const router = Router();

router.use('/category', category);
router.use('/attribute', attribute);
router.use('/tag', tag);
router.use('/comment', comment);

router.get('/:id?', verifyUser, celebrate(show), isExists, ProductRepository.show);
router.post('/', verifyUser, isAuth(['admin']), celebrate(create), ProductRepository.create);

export default router;
