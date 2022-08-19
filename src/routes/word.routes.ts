import { Router } from "express";
import validate from "../middleware/validate";
import { createWordSchema } from "../schema/words.schema";
import {
  createWordHandler,
  shouldReviewWordHandle,
  wordMarkHandle,
} from "../controller/word.controller";

const router = Router();
router.post("/create", validate(createWordSchema), createWordHandler);
router.get("/shouldReview", shouldReviewWordHandle);
router.post("/mark", wordMarkHandle);

export default router;
