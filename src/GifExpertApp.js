import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";

const GifExpertApp = (props) => {

  const [categories, setcategories] = useState([
    "Breaking Bad",
    "Rick and Morty",
    "BoJack Horsman",
  ]);

  // const handleAdd = (e) =>{
  //   setcategories([...categories, 'newCategorie']);
  // }

  return (
    <from>
      <h2>GifExpertApp</h2>
      <AddCategory/>
      <hr />

      <ol>
        {categories.map(category => {
          return <li key={category}> {category} </li>  
        })
      }
      </ol>
    </from>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
