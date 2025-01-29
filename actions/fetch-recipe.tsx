"use server"

import { TopRecipe } from "@/types/recipe"


export const fetchRecipe = async (id :string) => { 
    
    const recipe = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`,{next : {revalidate : 3600}})
                                       .then((res) => res.json())
                                       .then((data) => {
                                        return {
                                            id : data.id,
                                            image : data.image,     
                                            prepTime : data.readyInMinutes, 
                                            servingSize : data.servings, 
                                            title : data.title, 
                                            likes : data.aggregateLikes, 
    
                                        } 
                                       } 
                                        
        
                                       ) as TopRecipe


    return recipe
}