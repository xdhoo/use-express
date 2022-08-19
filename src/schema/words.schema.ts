import { object, string, TypeOf, number } from "zod";
export const createWordSchema = object({
  //@ts-ignore
  body: object({
    english: string({ required_error: "english is required" }).nonempty(),
    chinese: string().optional(),
    type: string().optional(),
    egSentences: string().optional(),
    status: number().optional(),
  }),
});

export type CreateWordInput = TypeOf<typeof createWordSchema>;
