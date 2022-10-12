import auth from './auth';
import user from './user';
import product from './product';

import { Router } from 'express';
import { Request, Response } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Status Check');
});

router.use('/auth', auth);
router.use('/user', user);
router.use('/product', product);

export default router;
