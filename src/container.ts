import { UserRepository } from "./repositories/user.repositoy";
import { UserService } from "./services/user.service";
import { UserController } from "./controllers/user.controller";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export const container = {
  userRepository,
  userService,
  userController
}
