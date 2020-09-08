import React, { useState, useEffect } from 'react';
import "./search.css"
import header from "../images/webhead.jpg"
import { Button } from 'reactstrap';

const Search = ({search, setSearch}) => {

  const [value,setValue] = useState("")

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="total"> 
      <img src={header} className="image"></img>
      <div className="search">
        <input className="field" placeholder="Enter the recipe" onChange={changeValue} value={value}/>
        <br/>
        <Button size="sm" outline color="danger" className="button" onClick={()=>setSearch(value)}>Search</Button>
      </div>
    </div>
    
  )
}

export default Search
