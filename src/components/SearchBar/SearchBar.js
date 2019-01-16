import React from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return(
        <div className="search-bar-main">
            <div className="search-bar-container">
                <div className="search-bar-left">
                <a href="https://kieranvieira.com/"><i className="fab fa-instagram"></i> Instagram </a>
                </div>
                <div className="search-bar-middle">
                    <form>
                        <input 
                            type="text" 
                            placeholder="Search"
                            onChange={props.search}
                        />
                    </form>
                </div>
                <div className="search-bar-right">
                    <a href="https://kieranvieira.com/"><i className="far fa-compass"></i></a>
                    <a href="https://kieranvieira.com/"><i className="far fa-heart"></i></a>
                    <a href="https://kieranvieira.com/"><i className="far fa-user"></i></a>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;