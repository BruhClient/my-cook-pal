
import { Skeleton } from "@/components/ui/skeleton";

const Loading= () => {
    return ( <div className="flex w-full justify-center items-center gap-3 flex-col px-3">
        <Skeleton className="max-w-[800px] w-full h-[400px]"/>
        <Skeleton className="max-w-[800px] w-full h-[200px]"/>
        <Skeleton className="max-w-[800px] w-full h-[500px]"/>
        <Skeleton className="max-w-[800px] w-full h-[600px]"/>
    </div> );
}
 
export default Loading;