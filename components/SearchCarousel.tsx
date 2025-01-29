"use client"

import { FunctionComponent, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import RecipeCard from "./RecipeCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryRecipes } from "@/actions/searched-recipes";
import {useIntersection} from "@mantine/hooks"
import { Skeleton } from "./ui/skeleton";
import { CircleAlert } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface SearchCarouselProps {
    
}
 


const SearchCarousel: FunctionComponent<SearchCarouselProps> = () => {
  const lastRecipeRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()


  const {ref,entry} = useIntersection({ 
    root: lastRecipeRef.current, 
    threshold : 0.5
})
    const {data,fetchNextPage,hasNextPage,isFetching} = useInfiniteQuery({
      queryKey:['Infinite Query' , searchParams.get("category"),searchParams.get("q")], 
      queryFn : async ({pageParam}) => { 
        
        const recipes = await queryRecipes({
          page : pageParam , 
          category : searchParams.get("category") ?? undefined, 
          q : searchParams.get("q") ?? undefined
        })
        return recipes
      } , 
      initialPageParam : 0, 
      getNextPageParam : (lastPage, allPages, lastPageParam ) => { 
        if (lastPage.length < 10 ) { 
            return undefined
        }
        return lastPageParam + 1
    },   
    })
    
    useEffect(() => { 
      
      if (entry?.isIntersecting && hasNextPage  && !isFetching) { 
        
          fetchNextPage()
      }
      
    },[entry])

    

   

    const recipes = data?.pages.flatMap((page) => page) ?? []

    
    return ( <>
            <Carousel className="w-full px-2">
      <div className="px-4 text-xl"> 
        {searchParams.get("q") && searchParams.get("category") ? `Search results for '${searchParams.get("q")}' in ${searchParams.get("category")}` : ""}
        {searchParams.get("q") && !searchParams.get("category") ? `Search results for '${searchParams.get("q")}'` : ""}
        {!searchParams.get("q") && searchParams.get("category") ? `Search results for '' in ${searchParams.get("category")}` : ""}
      </div>

        

          
          
          

          <CarouselContent>
              {recipes.map((recipe,index) => {
                  if (index === recipes.length-1 ) { 
            
                    return (
                          <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center " ref={ref}>
                              
                                <RecipeCard recipe={recipe}/>
                              
                          </CarouselItem>
                      )
                  }
                  return <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center ">
                            
                              <RecipeCard recipe={recipe}/>
                            
                          </CarouselItem>
              })}

              {isFetching ? 
              <>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
              <div className="p-1">
                <Skeleton className="w-[400px] h-[500px]"/>
              </div>
                
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
              <div className="p-1">
                <Skeleton className="w-[400px] h-[500px]"/>
              </div>
                
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
              <div className="p-1">
                <Skeleton className="w-[400px] h-[500px]"/>
              </div>
                
              </CarouselItem>
              
              
              
              </>
              
              : ""}
              
            
          </CarouselContent>

          <div className="flex w-full items-center justify-center gap-16 mt-3">
            <CarouselPrevious />
            <CarouselNext />
            </div>
          
          
          
        </Carousel>
        {recipes.length === 0 && !isFetching ? <div className="flex flex-col justify-center items-center h-[400px] gap-3">
          <CircleAlert size={100} />
          <div className="text-2xl">
            No Recipes Found
          </div>
        </div> : '' }

  


    </> );
}
 
export default SearchCarousel;