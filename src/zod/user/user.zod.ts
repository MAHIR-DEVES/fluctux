import { z } from 'zod';

export const userZodSchema = z.object({
    fname: z.string().max(50, "First name must be less than 50 characters").optional(),
    lname: z.string().max(50, "Last name must be less than 50 characters").optional(),
    email: z.string().email("Invalid email address").optional(),
    password: z.string().min(8, "Password must be at least 8 characters").optional(),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters").optional(),
    avatar: z.string().optional(),
    username: z.string().min(6, "Username must be at least 6 characters").regex(/^[a-z0-9_]+$/, "Username must contain only lowercase letters, numbers, and underscores").max(20, "Username must be less than 20 characters").optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})
