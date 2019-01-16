import React from 'react';
import './Login.css';
import instagramLogo from '../../assets/instagram-logo.png'

class Login extends React.Component{
    render(){
        return(
            <div className="login-container">
            <img src={instagramLogo} alt="instagram logo"/>
            <h2>Sign up to see photos and videos from your friends.</h2>
            <button>Log In with Facebook</button>
            <h4>OR</h4>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={this.props.login}>
                        <input type="text" name="username" placeholder="Username" required/>
                        <input type="text" name="fullname" placeholder="Full Name" required/>
                        <input type="password" name="password" placeholder="Password" required/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            
            <h3 className="login-terms">By signing up, you agree to our <a href="https://kieranvieira.com/">Terms</a>, <a href="https://kieranvieira.com/">Data Policy</a> and <a href="https://kieranvieira.com/">Cookies Policy.</a></h3>
            </div>
        )
    }
}

export default Login;