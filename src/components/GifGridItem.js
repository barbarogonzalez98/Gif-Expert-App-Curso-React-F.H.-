import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {

    // const [item, setItem] = useState([]);

    // useEffect(() => {
    //     getImg(); 
    // }, [])
    
    // const getImg = (img) => {

    //     setItem(img);
    // }
    // console.log(id, title, url);

  return (
    <div className='card animate__animated animate__pulse'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
    // img: PropTypes.object.isRequired,
}

export default GifGridItem