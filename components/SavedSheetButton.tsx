"use client"

import { FunctionComponent } from "react";
import { buttonVariants } from "./ui/button";
import { Bookmark } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { useLocalStorage } from "@mantine/hooks";
import SavedRecipeCard from "./SavedRecipe";
import { AnimatePresence,motion } from "motion/react";

interface SavedSheetButtonProps {

    className? : string

}

const AnimatePresenceVariants = {

  visible : { x: 0, opacity: 1 }, 
  hidden : { x: 300, opacity: 0 } ,
  exit : { x: -300, opacity: 0 }
}
 
const SavedSheetButton: FunctionComponent<SavedSheetButtonProps> = ({className}) => {
    const [value,setValue] = useLocalStorage<string[]>({
        key : "recipes" , 
        defaultValue : []
    })

  
    
    return ( <Sheet>
        <SheetTrigger className={cn(className,buttonVariants({variant:"default"}),"px-2 py-1")}>
         <Bookmark />
        </SheetTrigger>
        <SheetContent style={{ maxWidth: '800px' , width: "100%" }}>
          <SheetHeader>
            <SheetTitle>Saved Recipes</SheetTitle>
            <SheetDescription>
              Click on recipes to see more details
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col overflow-scroll h-full items-center pt-4 pb-14 gap-3">
            <AnimatePresence>
            {
                value.map((id :string) => 
                      <motion.div variants={AnimatePresenceVariants} initial="hidden" animate="visible" exit="exit"  key={id}>
                          <SavedRecipeCard id={id}/>
                      </motion.div>
                        
            
                )
            }
            </AnimatePresence>
          </div>
          
        </SheetContent>
      </Sheet>
       );
}
 
export default SavedSheetButton;