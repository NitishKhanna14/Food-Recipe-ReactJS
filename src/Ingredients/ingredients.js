import React, { useEffect } from 'react'
import "./ingredients.css"
import {Button} from "reactstrap"

const Ingredients = ({param,arr}) => {

if (arr[param]) {
  return ( 
    <div className="ingre">
      <p className="title">{arr[param].recipe.label} </p>
      <p>
        <div className="points">
          {arr[param].recipe.ingredientLines.map((ing)=>{return(<p className="point">{ing}</p>)})}
        </div>  
      </p>
      <a href={arr[param].recipe.url} target="_blank"><Button color="danger" style={{marginTop:"13px"}}>How To Prepare ?</Button></a>
    </div>
  )
}
else return("")
}

export default Ingredients
