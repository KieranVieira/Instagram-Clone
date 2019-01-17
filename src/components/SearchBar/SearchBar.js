import React from 'react';
import styled from 'styled-components';

const SearchBarMain = styled.header`
    padding: 20px 0;
    border-bottom: 1px solid lightgrey;
    background-color: white;
    .search-bar-container{
        display: flex;
        justify-content: space-between;
        width: 980px;
        margin: 0 auto;
        font-size: 2.5rem;
        .search-bar-left a {
            color: black;
            text-decoration: none;
            i{
                color: black;
                padding-right: 15px;
                margin-right: 5px;
                border-right: 1px solid black;
            }
        }
        .search-bar-middle input{
            text-align: center;
            padding: 5px 20px;
            border-radius: 3px;
            background-color: #FAFAFA;
            border: 1px solid #DBDBDB;
        }
        .search-bar-right i{
            margin-left: 30px;
            color: black;
        }
    }
    @media (max-width:1060px){
        .search-bar-container{
            width: 100%;
        }
        .search-bar-left{
            padding-left: 15px;
        }
        .search-bar-right{
            padding-right: 15px;
        }
    }

    @media (max-width:660px){
        .search-bar-middle{
            display: none;
        }
        .search-bar-right i{
            margin-left: 20px
        }
    }

    @media (max-width:330px){
        .search-bar-right i{
            margin-left: 5px
        }
    }
`;

const SearchBar = props => {
    return(
        <SearchBarMain>
            <div className="search-bar-container">
                <div className="search-bar-left">
                <a href="https://kieranvieira.com/"><i className="fab fa-instagram"></i> Instagram </a>
                </div>
                <div className="search-bar-middle">
                    <input 
                        type="text" 
                        placeholder="Search"
                        onChange={props.search}
                    />
                </div>
                <div className="search-bar-right">
                    <a href="https://kieranvieira.com/"><i className="far fa-compass"></i></a>
                    <a href="https://kieranvieira.com/"><i className="far fa-heart"></i></a>
                    <a href="https://kieranvieira.com/"><i className="far fa-user"></i></a>
                </div>
            </div>
        </SearchBarMain>
    )
}

export default SearchBar;