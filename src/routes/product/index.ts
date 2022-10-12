import category from './category.routes';
import attribute from './attribute.routes';

import { Router } from 'express';

const router = Router();

router.use('/category', category);
router.use('/attribute', attribute);

export default router;
