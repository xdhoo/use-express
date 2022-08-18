import { Request, Response } from "express";
import commonRes from "../utils/commonRes";
import silentHandle from "../utils/silentHandle";

import { CreateUserInput, UpdateUserInput } from "../schema/users.schema";
import USER_CRUD from "../service/user.service";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  const [e, user] = await silentHandle(USER_CRUD.create, req.body);
  return e ? commonRes.error(res, null, e.message) : commonRes(res, user);
}

export async function updateUserHandler(
  req: Request<{}, {}, UpdateUserInput["body"]>,
  res: Response
) {
  const [e, user] = await silentHandle(USER_CRUD.update, req.body);
  return e ? commonRes.error(res, null, e.message) : commonRes(res, user);
}

export async function findUserHandler(
  req: Request<{}, {}, { id: string }>,
  res: Response
) {
  const [e, user] = await silentHandle(USER_CRUD.find, { _id: req.body.id });
  return e ? commonRes.error(res, null, e.message) : commonRes(res, user);
}

export async function deleteUserHandle(
  req: Request<{}, {}, { id: string }>,
  res: Response
) {
  const [e, user] = await silentHandle(USER_CRUD.delete, { _id: req.body.id });
  return e ? commonRes.error(res, null, e.message) : commonRes(res, user);
}
