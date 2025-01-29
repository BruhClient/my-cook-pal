"use client"

import { FunctionComponent, Suspense } from "react";
import { Button, buttonVariants } from "./ui/button";
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

interface SavedSheetButtonProps {

    className? : string

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
            {
                value.map((id :string) => 
                    
                        <SavedRecipeCard id={id} key={id}/>
            
                )
            }
          </div>
          
        </SheetContent>
      </Sheet>
       );
}
 
export default SavedSheetButton;