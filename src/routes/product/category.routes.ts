import { Router } from 'express';
const router = Router({ mergeParams: true });

import { CategoryRepository } from '../../repositories';
import { verifyUser } from '../../middleware';

router.get('/list', verifyUser, CategoryRepository.list);

export default router;
