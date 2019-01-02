import React from 'react';
import Login from '../Login/Login'

const Authenticate = App => {
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                loggedIn: localStorage.getItem('loggedIn'),
            }
        }

        login = (e) => {
            localStorage.setItem('username', e.target.username.value);
            localStorage.setItem('fullname', e.target.fullname.value);
            localStorage.setItem('password', e.target.password.value);
            localStorage.removeItem('loggedIn');
            localStorage.setItem('loggedIn', true);
        }

        render(){
            if(this.state.loggedIn){
                return <App dummyData={this.props.dummyData} handleChange={this.props.handleChange}/>
            }else return <Login login={this.login} />
        }
    }
}

export default Authenticate;