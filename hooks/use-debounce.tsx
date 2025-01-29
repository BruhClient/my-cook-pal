
import { FunctionComponent, useEffect, useState } from "react";


 
export const useDebounce = (value : string , delay =200) => {
    const [debounceValue,setDebounceValue] = useState(value)

    useEffect(() => { 
        const timeout = setTimeout(() => { 
            setDebounceValue(value)
        },delay) 

        return () => { 
            clearTimeout(timeout)
        }

    },[value])

    
    return [debounceValue];
}
 
