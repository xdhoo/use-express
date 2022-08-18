import { object, string, TypeOf } from "zod";
export const createUserSchema = object({
  // @ts-ignore
  body: object({
    account: string({ required_error: "account is required" }).nonempty(),
    name: string({ required_error: "Name is required" }).nonempty(),
    password: string({ required_error: "password is required" }).min(
      6,
      "Password is too short, more than 6 char"
    ),
    // passwordConfirmation: string({
    //   required_error: "Confirmation password is required",
    // }),
  }),
  // .refine((data) => data.password === data.passwordConfirmation, {
  //   message: "Two password is not match",
  //   path: ["passwordConfirmation"],
  // }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

export type UpdateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.id">;
