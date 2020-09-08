import React, { useState, useEffect } from 'react';
import Items from "./Items/items"
import Ingredients from "./Ingredients/ingredients"
import Search from "./Search/search"
import Header from "./header/header"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Footer from "./footer/footer"
import "./App.css"

const App = () => {

  const [search,setSearch] = useState("chicken")
  const [arr,setArr] = useState([])
  const [param,setParam] = useState(0)

  const fetchData = async () => {
    const data = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=2cdb2b68&app_key=434c653bcf735d90b8bf5ce9202a87a4`)
    setArr(data.data.hits)
    console.log(data.data.hits)
    console.log(search)
  }

  useEffect(()=>{
    fetchData()
  },[search, param])


  return (
    <div className="totalapp">
      <Router>
        <Header/>
        <div className="push"></div>
      <Switch>
        <Route exact path="/">
        <Search search={search} setSearch={setSearch}/>
        <Items arr={arr} setParam={setParam}/>
        </Route>
       
      <Route exact path="/ingredients"> <Ingredients arr={arr} param={param}/> </Route>
      </Switch>
      <div className="push"></div>
      <Footer/>
      </Router>
    </div>
  )
}

export default App;