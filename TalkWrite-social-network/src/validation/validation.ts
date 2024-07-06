import { z } from "zod";

export const schema = z.object({
    postContent: z.string().min(1, "Post content cannot be empty")
  });
  
 export type FormFields = z.infer<typeof schema>;