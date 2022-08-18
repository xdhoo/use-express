import mongoose from "mongoose";

export interface WordDocument extends mongoose.Document {
  english: string;
  chinese: string;
  type: string;
  egSentences: unknown;
  status: number;
  createdAt: Date;
  updateAt: Date;
  deletedAT: Date;
}

const wordSchema = new mongoose.Schema(
  {
    english: { type: String, require: true },
    chinese: { type: String },
    type: { type: String },
    egSentences: {},
    status: { type: Number },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<WordDocument>("Word", wordSchema);
export default UserModel;
