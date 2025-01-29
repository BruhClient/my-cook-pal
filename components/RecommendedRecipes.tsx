import { TopRecipe } from "@/types/recipe";
import { FunctionComponent } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import FeaturedRecipeCard from "./FeaturedRecipeCard";

interface RecommendedRecipesProps {
    id : string
}
 
const RecommendedRecipes: FunctionComponent<RecommendedRecipesProps> = async ({id}) => {
    const url = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.API_KEY}`

    const recipes = await fetch(url, {next:{revalidate : 3600}}).then((data) => data.json())
                                               .then((res) => {
                                                
                                                return res.map((data : any) => {

                                                    let image = undefined
                                                    
                                                    if (data.sourceUrl) { 
                                                        image = `${data.sourceUrl}.${data.imageType}`
                                                    }

                                                    
                                                    return {
                                                        id : data.id,
                                                        image : image ,     
                                                        prepTime : data.readyInMinutes, 
                                                        servingSize : data.servings, 
                                                        title : data.title, 
                                                        likes : data.aggregateLikes, 
                
                                                    }
                                                })
                                                 
                                               } 
                                                
                
                                               ) as TopRecipe[]

    

    

    return ( <Carousel className="w-screen px-2 py-3">
            <div className="flex flex-col items-center">
            <div className="text-2xl text-center">Similiar Recipes</div>
            <div className="bg-primary w-9 h-2 rounded-lg mb-3 "/>
            </div>
  
        
            <CarouselContent>
                {recipes.map((recipe) => {
                    
                    return <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                              <div className="p-1">
                                <FeaturedRecipeCard recipe={recipe}/>
                              </div>
                            </CarouselItem>
                })}


  
                
                
              
            </CarouselContent>

            <div className="flex w-full items-center justify-center gap-16 mt-3">
            <CarouselPrevious />
            <CarouselNext />
            </div>
            

            
          </Carousel> );
}
 
export default RecommendedRecipes;