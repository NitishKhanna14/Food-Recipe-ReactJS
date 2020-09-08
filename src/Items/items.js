import React from 'react';
import {
  Card, CardImg, CardTitle, Button
} from 'reactstrap';

import {
  Link
} from "react-router-dom"
import "./items.css"


const Item = ({arr, setParam}) => {
  return (
    <div className="allItems">
      
      <div className="fff">
 
          {arr.map((it, index)=>{
            return (    
              <Card  outline color="danger" className="card">
                <Link to="/ingredients"><CardTitle className="text-danger card-title" style={{ fontWeight: 'bold', textAlign:"center"}}>{it.recipe.label}</CardTitle></Link>
                <CardImg style={{width:"100%", height:"65%", alignSelf:"center"}} src={it.recipe.image} alt="Card image cap" />               
                  <Link to="/ingredients">
                    <Button color="danger" style={{marginTop:"8%", textAlign:"center"}} onClick={()=>setParam(index)}>Ingredients</Button>
                  </Link>                
              </Card>         
            )  
          })}  

      
        </div>

    </div>
  )
}

export default Item;
