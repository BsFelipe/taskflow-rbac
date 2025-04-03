import { Router } from 'express';
import { container } from '../container';

const router = Router();

router.post('/register', container.userController.register);
router.post('/login', container.userController.login);
// outras rotas protegidas depois

export default router;
