import mongoose, { Schema, model } from 'mongoose';
import { IUser } from '../types/IUser';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'manager', 'user'],
    required: true
  }
}, { timestamps: true })

export default model<IUser>('User', userSchema);
