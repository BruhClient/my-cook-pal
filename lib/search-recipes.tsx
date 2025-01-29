import z from "zod"

export const SearchRecipesSchema = z.object({ 
    category : z.optional(z.string()) ,
    q : z.optional(z.string()), 
    page : z.number(), 

})

export type SearchRecipesSchema = z.infer<typeof SearchRecipesSchema>

