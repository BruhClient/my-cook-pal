
"use client"

import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@mantine/hooks";

interface SaveButtonProps {
    id : number , 
    className? : string, 
    inSheet? : boolean ,

}
 
const SaveButton: FunctionComponent<SaveButtonProps> = ({id,className,inSheet=false}) => {

    const [isSaved,setIsSaved] = useState<boolean>(false)
    const router = useRouter()
    const [value,setValue] = useLocalStorage<number[]>({
            key : "recipes" , 
            defaultValue : []
    })
    
    const saveRecipe = async () => {
        
        
        if (value.length === 0) { 
            setValue([id])
            setIsSaved(true)
        } else { 
   
            
            
            if (value.includes(id)) { 
               const  formattedRecipes = value.filter((recipe : number) => recipe !== id )

               setValue(formattedRecipes)
               setIsSaved(false)
            } else{ 
                value.push(id)
                setValue(value)
                setIsSaved(true)
            }

            
            

           
            
        }
        
        router.refresh()
        

    }

    useEffect(() => { 
        const item = localStorage.getItem("recipes")

        if (!item) { 
            setIsSaved(false)
        } else { 
            if (JSON.parse(item).includes(id)) { 
                setIsSaved(true)
            }
        }
    },[])

    if (!inSheet) { 
        return ( <Button variant={"outline"} className={className} onClick={saveRecipe} key={"not in sheet"}>
        
            {isSaved && !inSheet ? "Saved" : <><Bookmark />Save</>}
        </Button> );
    } else { 
        return ( <Button variant={"destructive"} className={className} onClick={saveRecipe} key={"in sheet"}>
        
           Forget recipe
        </Button> );
    }
    
}
 
export default SaveButton;