export interface Recipe { 
    id : number ,
    image : string | undefined, 
    likes : number , 
    macros : {
        calories : number , 
        protein : number,
    }, 
    prepTime : number , 
    servingSize : number , 
    title :string , 
}

export interface TopRecipe { 
    id : number ,
    image : string | undefined , 
    likes : number , 
    prepTime : number , 
    servingSize : number , 
    title :string , 
}

export interface RecipeDetails {
    vegetarian : boolean, 
    likes : number , 
    image : string | undefined, 
    servingSize : number , 
    summary : string , 
    instructions : string , 
    ingredients : string[], 
    title : string , 
    prepTime : number , 
    credits: string ,
    macros : { 
        calories : number , 
        protein : number , 
    }, 
    instructions : string , 

}