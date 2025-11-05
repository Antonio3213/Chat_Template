import { z } from "zod";

export const loginZodSchema = z.object({
    email: z.string().trim().pipe(z.email()),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type loginZodSchemaType = z.infer<typeof loginZodSchema>;