import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
 constructor(private userService: UserService ) {}

 async register(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await this.userService.register(req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
 }
 async login(req: Request, res: Response, next: NextFunction) {}
}
