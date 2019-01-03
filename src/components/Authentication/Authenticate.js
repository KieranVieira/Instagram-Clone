import React from 'react';
import Login from '../Login/Login'

const Authenticate = App => {
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false,
            }
        }

        login = (e) => {
            localStorage.setItem('username', e.target.username.value);
            localStorage.setItem('fullname', e.target.fullname.value);
            localStorage.setItem('password', e.target.password.value);
            this.setState({
                loggedIn:true
            })
        }

        render(){
            if(this.state.loggedIn === true){
                return <App dummyData={this.props.dummyData} handleChange={this.props.handleChange}/>
            }else return <Login login={this.login} />
        }
    }
}

export default Authenticate;