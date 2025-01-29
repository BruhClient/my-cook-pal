"use client"

import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ViewRecipeButtonProps {
    id :number
}
 
const ViewRecipeButton: FunctionComponent<ViewRecipeButtonProps> = ({id}) => {
    return ( <Button className="flex-1 p-0" >
        <Link href={`/recipe/${id}`} className="w-full h-full  p-2 text-center">View Recipe</Link>
    </Button> );
}
 
export default ViewRecipeButton;