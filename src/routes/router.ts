import { Router } from 'express';
import userRoutes from './user.routes';
// import taskRoutes from './task.routes'; // depois

const router = Router();

router.use('/users', userRoutes);
// router.use('/tasks', taskRoutes);

export default router;
