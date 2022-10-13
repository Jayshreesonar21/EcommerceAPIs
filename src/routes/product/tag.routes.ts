import { Router } from 'express';
const router = Router({ mergeParams: true });

import { TagRepository } from '../../repositories';
import { verifyUser } from '../../middleware';

router.get('/list', verifyUser, TagRepository.list);

export default router;
