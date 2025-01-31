"use client"

import { TopRecipe } from "@/types/recipe";
import { FunctionComponent } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { Clock, Soup, Star } from "lucide-react";
import ViewRecipeButton from "./ViewRecipeButton";
import SaveButton from "./SaveButton";
import { motion } from "motion/react";
interface FeaturedRecipeCardProps {
    recipe : TopRecipe
}
 

const AnimatePresenceVariants = {

    visible : { x: 0, opacity: 1 }, 
    hidden : { x: 300, opacity: 0 } ,
    exit : { x: -300, opacity: 0 }
  }


const FeaturedRecipeCard: FunctionComponent<FeaturedRecipeCardProps> = ({recipe}) => {
    
    return ( <motion.div className="px-2 max-w-[400px]" variants={AnimatePresenceVariants} initial="hidden" whileInView="visible" viewport={{once : true}} >
        <Card className="p-3 w-full flex flex-col gap-2 shadow-lg">
        
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
            <SaveButton id={recipe.id }/>
        </div>
        


        


        
    </Card>
    </motion.div> );
}
 
export default FeaturedRecipeCard;