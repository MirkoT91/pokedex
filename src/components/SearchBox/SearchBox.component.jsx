import React from "react";
import './SearchBox.styles.scss';

const SearchBox = ({type, placeholder, onChangeHandler}) => {
        
    return (
        <input
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
        />
    )

}

export default SearchBox;