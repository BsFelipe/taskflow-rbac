import { Document } from 'mongoose';

export type UserRole = 'admin' | 'manager' | 'user';

export interface IUser extends Document {
  name: string;
  username: string;
  passwordHash: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type RegisterUserDTO = {
  name: string;
  username: string;
  password: string;
  role: UserRole;
}

export default IUser;
