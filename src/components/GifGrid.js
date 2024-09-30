import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "http://api.giphy.com/v1/gifs/search?q=Riack+and+Morty&limit=10&api_key=uyhnw5DFKp85bKZvVB5CTgNCUHBj9R4D";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      {images.map((img) => (
        <GifGridItem 
         key={img.id} 
         {...img} />
      ))}
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
