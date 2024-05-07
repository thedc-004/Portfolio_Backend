import mongoose, { Schema, Document } from 'mongoose';

interface UserData extends Document {
  username: string;
  email: string;
  subject: string;
  detail: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  detail: { type: String, required: true },
});

export const UserModel = mongoose.model<UserData>('UserData', userSchema);
