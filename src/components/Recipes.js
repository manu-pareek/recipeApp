import React from 'react';
export default function Recipes(props){
    const {recipes}=props;
    return(
     
        <div class="card-columns">
        {
            recipes.map(recipe=>(
                
                    <div class="card">
                        <img src={recipe.recipe.image} class="img-fluid w-50 mx-auto rounded-circle" />
                        <div class="card-body">
                            <h5>{recipe.recipe.label}</h5>
                        </div>
                        <ol class="list-group list-group-flush">
                            {
                                recipe.recipe.ingredientLines.map(ingr=>(<li class="list-group-item">{ingr}</li>))
                            }
                        </ol>
                    
                </div>
            ))
        }
        
        </div>
    )
}