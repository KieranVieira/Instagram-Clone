import React from 'react';
import styled from 'styled-components';

const users = [ //Users array simulates recomended users for footer component
    {
        img: 'https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg',
        name: 'philzcoffee',
        reccomendedFrom: 'Friend on Facebook',
    },
    {
        img: 'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg',
        name: 'fortnite',
        reccomendedFrom: 'Friend on Facebook',
    },
    {
        img: 'https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg',
        name: 'playhearthstone',
        reccomendedFrom: 'Friend on Facebook',
    }
];

const FooterMain = styled.div`
    @media (max-width:1060px){
        display: none;
    }
`;

const CurrentUser = styled.div`
    margin: 55px 25px 0 25px;
    display: flex;
    img{
        width: 50px;
        height: 50px;
        border-radius: 500px;
    }
    div{
        margin: 9px 0;
        margin-left: 15px;
    }
    h1{
        margin: unset;
        font-size: 1.4rem;
    }
    h2{
        margin: unset;
        margin-top: 5px;
        font-size: 1.2rem;
        color: grey;
        font-weight: 500;
    }
`;

const SuggestionHeader = styled.div`
    width: 320px;
    height: 215px;
    margin: 10px 0 25px 25px;
    background-color: white;
    border: 1px solid #dedede;
    border-radius: 3px;
    .suggestion-header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 20px 0 20px 0;
        h1{
            font-size: 1.4rem;
            color: #9D9D9D;
            margin: 0 25px;
        }
        a{
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
            font-weight: 100;
            margin: 2px 25px;
        }
    }
    .user-suggestion{
        display: flex;
        justify-content: space-between;
        height: 35px;
        margin: 15px 25px;
        a{
            color: #3897F0;
            height: 35px;
            margin: 10px 0;
            font-size: 1.1rem;
            font-weight: bold;
            text-decoration: none;
        }
        img{
            width: 35px;
            height: 35px;
            border: 1px solid grey;
            border-radius: 500px;
        }
    }
    .reccomended-user-name{
        width: 100%;
        margin: 3px 10px;
        h2{
            margin: unset;
        }
        p{
            font-size: 1.1rem;
            color: grey;
            margin: unset;
        }
    }
`;

const FooterLinks = styled.div`
    width: 320px;
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        a{
            text-decoration: none;
            font-size: 1.15rem;
            color: #a3a3a3;
            margin: 0 3px 7px 0;
        }
    }
    p{
        margin: 15px 0 0 40px;
        color: #a3a3a3;
        a{
            color: #a3a3a3;
        }
    }
`;
const FooterContainer = props => {
    return (
        <FooterMain>

            <CurrentUser>
                <img src="https://scontent-yyz1-1.cdninstagram.com/vp/8d9a630b932d18bca14218cdc86bdaf2/5CB69DA2/t51.2885-19/s150x150/28766663_184249188759350_5475249589118304256_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com" alt=""/>
                <div>
                    <h1>{localStorage.getItem('username')}</h1>
                    <h2>{localStorage.getItem('fullname')}</h2>
                </div>
            </CurrentUser>

            <SuggestionHeader>
                <div className="suggestion-header">
                    <h1>Suggestions For You</h1>
                    <a href="https://kieranvieira.com/">See All</a>
                </div>
                {users.map((user,index) => {
                    return(
                        <div className="user-suggestion" key={index}>
                            <img src={user.img} alt=""/>
                            <div className="reccomended-user-name">
                                <h2>{user.name}</h2>
                                <p>{user.reccomendedFrom}</p>
                            </div>
                            <a href="https://kieranvieira.com/">Follow</a>
                        </div>
                    )
                })}
            </SuggestionHeader>

            <FooterLinks>
                <ul>
                    <a href="https://kieranvieira.com/">About Us •</a>
                    <li><a href="https://kieranvieira.com/">Support •</a></li>
                    <li><a href="https://kieranvieira.com/">Press •</a></li>
                    <li><a href="https://kieranvieira.com/">API •</a></li>
                    <li><a href="https://kieranvieira.com/">Jobs •</a></li>
                    <li><a href="https://kieranvieira.com/">Privacy •</a></li>
                    <li><a href="https://kieranvieira.com/">Terms •</a></li>
                    <li><a href="https://kieranvieira.com/">Directory •</a></li>
                    <li><a href="https://kieranvieira.com/">Profiles •</a></li>
                    <li><a href="https://kieranvieira.com/">Hashtags •</a></li>
                    <li><a href="https://kieranvieira.com/">Language</a></li>
                </ul>
                <p><a href="https://kieranvieira.com/">(c) 2018 KIERAN VIEIRA</a></p>
            </FooterLinks>
            
        </FooterMain>
    )
}

export default FooterContainer;