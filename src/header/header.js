import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import "./header.css"
import {
  Link
} from "react-router-dom"

const Header = (props) => {
  return (
    <div className="header">
      <Breadcrumb>
        <Link to="/"><BreadcrumbItem style={{color:"blue"}} active>Recipes</BreadcrumbItem></Link>
        <BreadcrumbItem></BreadcrumbItem>
        <BreadcrumbItem>Ingredients</BreadcrumbItem>
      </Breadcrumb>
      <a href="https://covidrtp.herokuapp.com/" target="_blank"><Button size="sm" className="covid">Covid Tracker</Button></a>
    </div>
  );
};

export default Header