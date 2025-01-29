
import { TopRecipe } from "@/types/recipe";
import { cache, FunctionComponent } from "react";
import FeaturedRecipeCard from "./FeaturedRecipeCard";




  
interface FeaturedRecipesProps {
    tags : string,
    title : string , 
}



 
const FeaturedRecipes: FunctionComponent<FeaturedRecipesProps> = async ({tags,title}) => {
    
    const recipes = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&include-tags=${tags}&number=6&includeNutrition=false`,{
        next: { revalidate: 3600 }
    }).then((res) => res.json()).then((data) => {
               
                return data.recipes.map((recipe :any) => {
                    return { 
                        image : recipe.image , 
                        likes : recipe.aggregateLikes, 
                        title : recipe.title , 
                        prepTime : recipe.readyInMinutes, 
                        servingSize : recipe.servings, 
                        id : recipe.id,

                        } 
                        } ) 

            }) as TopRecipe[]

        

    
    return ( 
    <div className="mt-5 flex flex-col items-center">
        <div className="flex flex-col items-center">
            <div className="text-2xl text-center">{title}</div>
            <div className="bg-primary w-9 h-2 rounded-lg mb-3 "/>
        </div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-fit">
        {
            recipes.map((recipe) => { 
                return <FeaturedRecipeCard recipe={recipe} key={recipe.id}/>
                   
            })
        }
        </div>
    </div>
        );
}
 
export default FeaturedRecipes;