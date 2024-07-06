import { z } from "zod";

export const schemaHome = z.object({
    postContent: z.string().min(1, "Post content cannot be empty")
  });
  
 export type FormFieldsHome = z.infer<typeof schemaHome>;

export const schemaLogIn = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  
export type FormFieldsLogIn = z.infer<typeof schemaLogIn>;
  