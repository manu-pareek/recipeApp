import React from 'react';
export default function Header(props){
    
    return(
        <div class="jumbotron">
            <i class="fas fa-utensils food-icon"></i>
            <h1 className="display-1">Food Recipe</h1>

 <div className="input-group mb-3">
  <input type="text" className="form-control w-50" placeholder="Try a New Dish Today!" aria-label="Search" aria-describedby="basic-addon2" value={props.search} onChange={(e)=>{props.onChange(e)}}/>
  <button className="input-group-text btn-dark" id="basic-addon2" onClick={props.onClick}>Search</button>
 </div>


        </div>
    )
}