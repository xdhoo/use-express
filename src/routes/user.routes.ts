import { Router } from "express";
import {
  createUserHandler,
  updateUserHandler,
  findUserHandler,
  deleteUserHandle,
} from "../controller/user.controller";
import validate from "../middleware/validate";
import { createUserSchema } from "../schema/users.schema";

const router = Router();

router.post("/create", validate(createUserSchema), createUserHandler);
router.post("/update", validate(createUserSchema), updateUserHandler);
router.post("/find", findUserHandler);
router.post("/delete", deleteUserHandle);

export default router;
