import FeaturedRecipes from "@/components/FeaturedRecipes";
import Searchbar from "@/components/Searchbar";
import SearchCarousel from "@/components/SearchCarousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";




export default async function Home() {
  
  
  


  return (
    <div className="flex flex-col w-full items-center gap-4">
      
      <SearchCarousel/>
      <Searchbar />
    
      <Suspense fallback={<Skeleton className="w-full h-[500px] mx-12 my-3" />}  >
            <FeaturedRecipes tags="desserts" title="Top Desserts !"/>
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-[500px] mx-12 my-3" />} >
            <FeaturedRecipes tags="dinner" title="Delicious Dinners !"/>
      </Suspense>
      <Suspense fallback={<Skeleton className="w-full h-[500px] mx-12 my-3" />}>
            <FeaturedRecipes tags="vegetarian" title="Vegetarian Options !"/>
      </Suspense>
     
    
    
      
    </div>
  );
}
