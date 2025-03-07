"use client"

import { Card, CardDescription, CardTitle } from "./ui/card";
import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { Star } from "lucide-react";
import InfoCard from "./RecipeInfoCard";
import ViewRecipeButton from "./ViewRecipeButton";
import SaveButton from "./SaveButton";
import { motion } from "motion/react";


const AnimatePresenceVariants = {

    visible : { x: 0, opacity: 1 }, 
    hidden : { x: 300, opacity: 0 } ,
    exit : { x: -300, opacity: 0 }
  }
 
const RecipeCard = ({recipe} : {recipe : Recipe}) => {
    
    return ( 
        <motion.div variants={AnimatePresenceVariants} initial="hidden" whileInView="visible" viewport={{once : true}} className="max-w-[400px]">
            <Card className="p-3 w-full flex flex-col gap-2 shadow-md ">
       
                    <Image src={recipe.image === undefined ? "/placeholder.jpg":recipe.image} alt="" width="0"
                        height="0"
                        sizes="100vw"
                        
                        className="w-full h-[300px] object-cover object-center rounded-lg" />
                    
                    <div className="flex items-center gap-x-4 px-2">
                        <div className="flex-1">
                            <CardTitle className="text-xl">{recipe.title}</CardTitle>
                            <CardDescription className="text-lg">Serves {recipe.servingSize} people !</CardDescription>
                        </div>
                        
                        <div className="flex gap-x-2 text-lg">
                        {recipe.likes}<Star />
                        </div>
                        
                    </div>

                    <div className="flex justify-around">
                        <InfoCard value={recipe.macros.calories} description="Calories"/>
                        <InfoCard value={recipe.macros.protein} description="Protein"/>
                        <InfoCard value={recipe.servingSize} description="Servings"/>
                    </div>

                    <div className="flex gap-1 w-full">
                        <SaveButton id={recipe.id}/>
                        <ViewRecipeButton id={recipe.id} />
                    </div>


                    
                </Card>
        </motion.div>
        
    
    );
}
 
export default RecipeCard;