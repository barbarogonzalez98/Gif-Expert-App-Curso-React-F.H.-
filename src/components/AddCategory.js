import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = props => {

    const [inputValue, setinputValue] = useState('NewCategory');
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Submit done');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {}

export default AddCategory
