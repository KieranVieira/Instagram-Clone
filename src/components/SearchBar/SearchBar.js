import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return(
        <div className="search-bar-main">
            <div className="search-bar-container">
                <div className="search-bar-left">
                    <i className="fab fa-instagram"></i> Finstagram 
                </div>
                <div className="search-bar-middle">
                    <form>
                        <input 
                            type="text" 
                            placeholder={'Search'}
                            onChange={props.handleChange}
                        />
                    </form>
                </div>
                <div className="search-bar-right">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;