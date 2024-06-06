import { z } from "zod"

export const SignupSchema = z.object({
    name: z.string().min(1, { message: "Name is Required"}),
    email: z.string().email({message: "Email is Required"}),
    password: z.string().min(6, {message: "Minimum 6 characters required"})
})