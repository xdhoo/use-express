import { BaseCrudProvider } from "../utils/crudProvider";
import UserModel, { UserDocument } from "../models/user.model";

const CRUD = BaseCrudProvider<UserDocument, Omit<UserDocument, "createAt">>(
  UserModel
);

export default CRUD;
