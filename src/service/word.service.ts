import { BaseCrudProvider } from "../utils/crudProvider";
import WordModel, { WordDocument } from "../models/word.model";

const CRUD = BaseCrudProvider<WordDocument, Omit<WordDocument, "createdAt">>(
  WordModel
);

export default CRUD;
