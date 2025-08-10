import {z} from "zod"

export const messageSchema = z.object({
    content:z
        .string()
        .min(10,{message:"content must be at least 10 characters"})
        .max(200, {message:"content must be under 200 characters"})
})