import { UserRepository } from '../repositories/user.repositoy';
import { IUser, RegisterUserDTO } from '../types/IUser'

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async register(data: RegisterUserDTO) {}
  async login() {}
}
