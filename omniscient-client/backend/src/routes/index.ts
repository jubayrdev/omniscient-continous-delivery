import { Router } from 'express';
import masterRoutes from './master.routes';

const router: Router = Router();
router.use('/master', masterRoutes);

export default router