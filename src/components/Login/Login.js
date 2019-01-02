import React from 'react';
import './Login.css';
import instagramLogo from '../../assets/instagram-logo.png'

class Login extends React.Component{
    constructor(props){
        super(props);
    }

componentDidMount(){
    localStorage.setItem('loggedIn', false);
}

    render(){
        return(
            <div className="login-container">
            <img src={instagramLogo}/>
            <h2>Sign up to see photos and videos from your friends.</h2>
            <button>Log In with Facebook</button>
            <h4>OR</h4>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={this.props.login}>
                        <input type="text" name="username" placeholder="Username" required/>
                        <input type="text" name="fullname" placeholder="Full Name" required/>
                        <input type="text" name="password" placeholder="Password" required/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            
            <h3 className="login-terms">By signing up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Policy.</span></h3>
            </div>
        )
    }
}

export default Login;