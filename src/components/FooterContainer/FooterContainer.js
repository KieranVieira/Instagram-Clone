import React from 'react';
import './FooterContainer.css';

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
]

const FooterContainer = props => {
    return (
        <div className="footer-container">

            <div className="current-user">
                <img src="https://scontent-yyz1-1.cdninstagram.com/vp/8d9a630b932d18bca14218cdc86bdaf2/5CB69DA2/t51.2885-19/s150x150/28766663_184249188759350_5475249589118304256_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com"/>
                <div>
                    <h1>{localStorage.getItem('username')}</h1>
                    <h2>{localStorage.getItem('fullname')}</h2>
                </div>
            </div>

            <div className="suggestion-container">
                <div className="suggestion-header">
                    <h1>Suggestions For You</h1>
                    <a href="https://kieranvieira.com/">See All</a>
                </div>
                {users.map(user => {
                    return(
                        <div className="user-suggestion">
                            <img src={user.img}/>
                            <div className="reccomended-user-name">
                                <h2>{user.name}</h2>
                                <p>{user.reccomendedFrom}</p>
                            </div>
                            <a href="https://kieranvieira.com/">Follow</a>
                        </div>
                    )
                })}
            </div>

            <div className="footer-links">
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
                <p><a href="https://kieranvieira.com/" target="_blank">(c) 2018 KIERAN VIEIRA</a></p>
            </div>
            
        </div>
    )
}

export default FooterContainer;