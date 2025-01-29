"use client"

import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
    className? : string
}

const BackButton: FunctionComponent<BackButtonProps> = ({className}) => {
    const router = useRouter()
    return ( <Button className={className} onClick={() => router.push("/")} size={"icon"} variant={"outline"} >
            <ChevronLeft />
    </Button> );
}
 
export default BackButton;