"use client"

import { useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import SavedSheetButton from "./SavedSheetButton";
import {motion} from "motion/react"
 
const Navbar  = () => {

    const router = useRouter()
    return ( <nav className="px-4 py-4 flex w-full items-center justify-between fixed z-50"  >
        <div className=" flex items-center cursor-pointer" onClick={() => router.replace("/") }>
            <div className="bg-primary h-16 aspect-square rounded-full overflow-visible">
                
            </div>
            <motion.div className="relative right-12 font-jua text-xl" animate={{  opacity : 1, y:0 }} initial={{opacity:0,y:-30}}>
                my cook pal
            </motion.div>
            
        </div>
        <div className="flex flex-col gap-2 items-center">
        <ModeToggle />
        <SavedSheetButton />
        </div>
        
    </nav> );
}
 
export default Navbar;