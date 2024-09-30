import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = (props) => {                   //Componente principal

  const [categories, setCategories] = useState([    //Hook
    "Breaking Bad",
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>   
      <hr />

      <ol>
        {
          categories.map(category =>
             (<GifGrid 
                key={category}
                category={category}
              />))
        }
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
