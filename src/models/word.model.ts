import mongoose from "mongoose";

export interface WordDocument extends mongoose.Document {
  english: string;
  chinese: string;
  type: string;
  egSentences: unknown;
  status: number;
  points: number;
  created: number;
  updated: number;
  deleted: number;
}

const wordSchema = new mongoose.Schema(
  {
    english: { type: String, require: true },
    chinese: { type: String },
    type: { type: String },
    egSentences: {},
    status: { type: Number },
    points: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: "created",
      updatedAt: "updated",
    },
  }
);

const WordModel = mongoose.model<WordDocument>("Word", wordSchema);
export default WordModel;
