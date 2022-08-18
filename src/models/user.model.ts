import mongoose from "mongoose";
import config from "../config/default";

export interface UserDocument extends mongoose.Document {
  name: string;
  account: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    account: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ account: 1, deletedAt: 1 }, { unique: true });

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
