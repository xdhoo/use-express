import { Request, Response } from "express";
import silentHandle from "../utils/silentHandle";
import WORD_CRUD from "../service/word.service";
import commonRes from "../utils/commonRes";
import { CreateWordInput } from "../schema/words.schema";
import { WordDocument } from "../models/word.model";

export async function createWordHandler(
  req: Request<{}, {}, CreateWordInput>,
  res: Response
) {
  const [e, word] = await silentHandle(WORD_CRUD.create, req.body);
  return e ? commonRes.error(res, null, e.message) : commonRes(res, word);
}

export async function shouldReviewWordHandle(
  req: Request<{}, {}, {}>,
  res: Response
) {
  const nowDate = new Date().setHours(0, 0, 0, 0);
  const [e, word] = await silentHandle(WORD_CRUD.find, {
    $or: [
      {
        created: {
          $gte: new Date(nowDate - 12 * 3600000),
        },
      },
      {
        created: {
          $gte: new Date(nowDate - 24 * 3600000),
          $lte: new Date(nowDate - 12 * 3600000),
        },
      },
      {
        created: {
          $gte: new Date(nowDate - 4 * 24 * 3600000),
          $lte: new Date(nowDate - 2 * 24 * 3600000),
        },
      },
      {
        created: {
          $gte: new Date(nowDate - 8 * 24 * 3600000),
          $lte: new Date(nowDate - 7 * 24 * 3600000),
        },
      },
      {
        created: {
          $gte: new Date(nowDate - 16 * 24 * 3600000),
          $lte: new Date(nowDate - 15 * 24 * 3600000),
        },
      },
    ],
  });

  return e ? commonRes.error(res, null, e.message) : commonRes(res, word);
}

export async function wordMarkHandle(
  req: Request<{}, {}, { id: string; isKnown: boolean }>,
  res: Response
) {
  const [err, theWord]: [
    Error | null,
    null | WordDocument[]
  ] = await silentHandle(WORD_CRUD.find, {
    _id: req.body.id,
  });
  if (theWord !== null) {
    const targetWord = theWord[0];
    targetWord.id = targetWord._id;
    targetWord.points = req.body.isKnown
      ? --targetWord.points
      : ++targetWord.points;
    const [e, word] = await silentHandle(WORD_CRUD.update, targetWord);
    return e ? commonRes.error(res, null, e.message) : commonRes(res, word);
  } else {
    return err ? commonRes.error(res, null, err.message) : "";
  }
}
