"use server"

import { DEFAULT_REFETCH_LIMIT } from "@/config/config"
import { SearchRecipesSchema } from "@/lib/search-recipes"
import { Recipe } from "@/types/recipe"
import axios from "axios"



export const queryRecipes = async ({q,category,page} : SearchRecipesSchema ) => { 




    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&number=${DEFAULT_REFETCH_LIMIT}&addRecipeNutrition=true&offset=${page * DEFAULT_REFETCH_LIMIT}${category ? `&cuisine=${category}` : ""}${q ? `&query=${q}` : ""}`
    const recipes = await fetch(url,{next : {revalidate : 3600}})
                    .then((res) => res.json())
                    .then((data) => {
                      
                      return data.results.map((recipe : any) => {
                        const nutrients = recipe.nutrition.nutrients.filter((nutrient :any) => ["Calories","Protein"].includes(nutrient.name))
                        
                        const calories = nutrients.filter((nutrient : any) => nutrient.name === "Calories")[0].amount 
                       
                        const protein = nutrients.filter((nutrient : any) => nutrient.name === "Protein")[0].amount 
                        return {
                          id : recipe.id, 
                          likes : recipe.aggregateLikes, 
                          prepTime : recipe.readyInMinutes, 
                          servingSize : recipe.servings, 
                          macros : {
                            calories : calories, 
                            protein:protein
                          }, 
                          title : recipe.title ,  
                          image : recipe.image
                  
                  
                  
                        } as Recipe
                      })
                    }) as Recipe[]

       


  return recipes


}