import { Router } from 'express';
const router = Router({ mergeParams: true });

import { AttributeRepository } from '../../repositories';
import { verifyUser } from '../../middleware';

router.get('/list', verifyUser, AttributeRepository.list);

export default router;
