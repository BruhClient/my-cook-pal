import { z } from "zod";

export const TopRecipesSchema = z.object({
    tags : z.string()
})

export type TopRecipesPayload = z.infer<typeof TopRecipesSchema>

