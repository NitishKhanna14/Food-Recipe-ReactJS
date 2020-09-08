import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import "./header.css"

const Header = (props) => {
  return (
    <div className="header">
      <Breadcrumb>
        <BreadcrumbItem active><a href="/">Recipes</a></BreadcrumbItem>
        <BreadcrumbItem>Ingredients</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Header