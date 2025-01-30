"use client"

import { TopRecipe } from "@/types/recipe";
import { FunctionComponent, useEffect, useState } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { Clock, Soup, Star } from "lucide-react";
import ViewRecipeButton from "./ViewRecipeButton";
import { fetchRecipe } from "@/actions/fetch-recipe";
import { Skeleton } from "./ui/skeleton";
import SaveButton from "./SaveButton";

interface SavedRecipeCardProps {
    id : string
}
 
const SavedRecipeCard: FunctionComponent<SavedRecipeCardProps> = ({id}) => {
    const [recipe,setRecipe] = useState<TopRecipe | null >(null)


    useEffect(() => { 
        
        if (!recipe) { 
                fetchRecipe(id).then((data) => { 
                    setRecipe(data)
                })
                
        }
        
        
    },[])


    if (!recipe) { 
        return <Skeleton className="w-full h-[500px]"/>
    }

            


    
    return ( <Card className="p-3 max-w-[400px] flex flex-col gap-2 shadow-lg">
        
        <Image src={recipe.image === undefined ? "/placeholder.jpg": recipe.image} alt="" width="0"
            height="0"
            sizes="100vw"
    
            className="w-full h-[300px] object-cover object-center rounded-lg"/>
       
        <div className="flex items-center gap-x-4 px-2 flex-1">
            <div className="flex-1">
                <CardTitle className="text-2xl">{recipe.title}</CardTitle>
                <CardDescription className="text-lg">
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
                    </CardDescription>
            </div>
            
            <div className="flex gap-x-2 text-lg">
            {recipe.likes}<Star />
            </div>
            
        </div>
        <div className="flex flex-col gap-2">
            <ViewRecipeButton id={recipe.id}/>
            <SaveButton id={recipe.id} inSheet/>
        </div>
        


        


        
    </Card> );
}
 
export default SavedRecipeCard;