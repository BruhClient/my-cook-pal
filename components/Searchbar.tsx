"use client"

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
  
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

 
const Searchbar = () => {

    const [search,setSearch] = useState("")
    const [category,setCategory] = useState("All")
    const searchParams = useSearchParams()
    const [debounceValue] = useDebounce(search,800)

    
    const router = useRouter()

    useEffect(() => { 
        if (debounceValue === "") { 
            const url = formUrlQuery({params : searchParams.toString() ,key : "q",value : null})
            router.replace(url,{scroll : false})
        } else { 
            const url = formUrlQuery({params : searchParams.toString() ,key : "q",value : debounceValue})
            router.replace(url,{scroll : false})
        }
        
        

    },[debounceValue])

    useEffect(() => {
        
        if (category === "All") { 
            const url = formUrlQuery({params : searchParams.toString() ,key : "category",value : null})
            router.replace(url,{scroll : false})
        } else { 
            const url = formUrlQuery({params : searchParams.toString() ,key : "category",value : category})
            router.replace(url,{scroll : false,})
        }
       
      
        
        

    },[category])


    return ( 
        <div className="flex items-center gap-x-2 w-full justify-center px-2">
            
           
            <Input className="max-w-[500px] pl-4 outline-none focus:outline-none text-lg " type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>

            <Select value={category} onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                    <SelectItem value="Indian">Indian</SelectItem>
                    <SelectItem value="Spanish">British</SelectItem>
                    <SelectItem value="British">Spanish</SelectItem>
                    <SelectItem value="Chinese">Chinese</SelectItem>
                    <SelectItem value="Mexican">Mexican</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
        </div>
    
     );
}
 
export default Searchbar;