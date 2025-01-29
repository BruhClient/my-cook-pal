import BackButton from "@/components/BackButton"
import InfoCard from "@/components/RecipeInfoCard"
import RecommendedRecipes from "@/components/RecommendedRecipes"
import SaveButton from "@/components/SaveButton"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { RecipeDetails } from "@/types/recipe"
import { Clock, Soup } from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"

type tParams = Promise<{ id: string }>;

 
const RecipeDetailsPage = async ( props :{params : tParams} ) => {
    const { id } = await props.params;
    
    
    const recipe = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${process.env.API_KEY}`,{next : {revalidate : 3600}})
                               .then((res) => res.json())
                               .then((data) => {
                                    const ingredients = data.extendedIngredients.map((ingredient : any) => { 
                                        return ingredient.original
                                    })
                                    const nutrients = data.nutrition.nutrients.filter((nutrient :any) => ["Calories","Protein"].includes(nutrient.name))
      
                                    const calories = nutrients.filter((nutrient : any) => nutrient.name === "Calories")[0].amount 
                                    
                                    const protein = nutrients.filter((nutrient : any) => nutrient.name === "Protein")[0].amount 
                                return {
                                    image : data.image,     
                                    vegetarian : data.vegetarian, 
                                    credits : data.creditsText, 
                                    prepTime : data.readyInMinutes, 
                                    servingSize : data.servings, 
                                    summary : data.summary , 
                                    instructions : data.instructions, 
                                    title : data.title, 
                                    likes : data.aggregateLikes, 
                                    ingredients : ingredients, 
                                    macros : { 
                                        calories , 
                                        protein
                                    }, 
                                  
                                   
                                } 
                               } 
                                

                               ) as RecipeDetails

    
    return ( <div className="flex justify-center ">
        <div className="flex flex-col items-center max-w-[800px] gap-4 relative ">
            <BackButton className="absolute top-0 left-0 z-50" />
            <div className="relative">
                <Image 
                src={recipe.image === undefined ? "/placeholder.jpg":recipe.image}
                alt=""
                width={600}
                height={600}
                className="rounded-lg"
                objectFit="cover"
                />
                <div className="flex flex-col absolute top-3 right-3 bg-primary p-2 rounded-lg">
                    <div className="flex gap-2">
                                <Clock />
                                <div>
                                    {recipe.prepTime} minutes 
                                </div>
                                
                    </div>
                    <div className="flex gap-2">
                                <Soup />
                                <div>
                                    {recipe.servingSize} servings 
                                </div>
                                
                    </div>
                </div>
            </div>
            
            <div className="flex justify-around w-full">
                <InfoCard value={recipe.macros.calories} description="Calories"/>
                <InfoCard value={recipe.macros.protein} description="Protein"/>
                <InfoCard value={recipe.servingSize} description="Servings"/>
            </div>
            
            
            <div className="md:text-4xl text-3xl text-center">
                {recipe.title}
                
            </div>
            <div className="text-lg text-center">
                Posted by <span className="text-primary">{recipe.credits}</span>
            </div>
            <Separator />
            <div className="px-4">
                
                <ul>
                    {recipe.ingredients.map((ingredient,index) => <li key={index}>{ingredient}</li>)}
                </ul>
            </div>
            <Separator />
            <div className="px-4 ">
                
                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
            <Separator />
            <div className="px-4">
                
                <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </div>
            <SaveButton id={parseInt(id)} className="w-full px-4" />
            <Suspense fallback={<Skeleton className="w-full px-3 h-[500px]"/>}>
                <RecommendedRecipes id={id}/>
            </Suspense>
            
        </div>
        

       
    </div> );
}
 
export default RecipeDetailsPage;