import React from 'react';
import styled from 'styled-components';

import instagramLogo from '../../assets/instagram-logo.png'

const LoginContainer = styled.div`
    width: 350px;
    background-color: white;
    border: 1px solid #dedede;
    border-radius: 3px;
    padding: 25px 0;
    margin: 15px auto;
    img{
        width: 55%;
        height: auto;
        margin: 0 80px;
    }
    h2{
        width: 270px;
        margin: 0 auto;
        margin-bottom: 15px;
        text-align: center;
        color: grey;
    }
    h3{
        width: 220px;
        font-size: 1.5rem;
        margin: 0 auto;
        font-weight: lighter;
        margin-bottom: 15px;
        text-align: center;
        color: grey;
        padding: 15px;
        a{
            color: grey;
            text-decoration: none;
            font-weight: bold
        }
    }
    h4{
        text-align: center;
        font-size: 1.3rem;
        margin: 8px 0;
        color: grey;
    }
    button{
        width: 270px;
        background-color: #458eff;
        color: white;
        font-weight: bold;
        border: unset;
        padding: 8px 5px;
        margin: 0 40px;
        border-radius: 3px;
        i{
            font-size: 2rem;
            padding: 0 5px 0 0;
        }
    }
    input{
        padding: 11px 8px;
        margin-bottom: 7px;
        border-radius: 3px;
        border: 1px solid #dedede;
        background-color: #FAFAFA;
    }
`;

const LoginFormContainer = styled.div`
    width: 270px;
    margin: 10px auto;
    form{
        display: flex;
        flex-direction: column;
        button{
            width: 270px;
            margin: 10px auto 0 auto;
            background-color: #458eff;
            color: white;
            font-weight: bold;
            border: unset;
            padding: 8px 5px;
            border-radius: 3px;
        }
    }
`

class Login extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    login = e => {
        localStorage.setItem('username', e.target.username.value);
        localStorage.setItem('fullname', e.target.fullname.value);
        localStorage.setItem('password', e.target.password.value);
        localStorage.setItem('loggedIn', true);
    }

    render(){
        return(
            <LoginContainer>
            <img src={instagramLogo} alt="instagram logo"/>
            <h2>Sign up to see photos and videos from your friends.</h2>
            <button>Log In with Facebook</button>
            <h4>OR</h4>
                <LoginFormContainer>
                    <form onSubmit={this.login}>
                        <input type="text" name="username" placeholder="Username" required maxLength="32"/>
                        <input type="text" name="fullname" placeholder="Full Name" required maxLength="32"/>
                        <input type="password" name="password" placeholder="Password" required minLength="4"/>
                        <button type="submit">Sign Up</button>
                    </form>
                </LoginFormContainer>
            
            <h3>By signing up, you agree to our <a href="https://kieranvieira.com/">Terms</a>, <a href="https://kieranvieira.com/">Data Policy</a> and <a href="https://kieranvieira.com/">Cookies Policy.</a></h3>
            </LoginContainer>
        )
    }
}

export default Login;