import React from 'react';

const authenticate = Posts => Login => {
    return class extends React.Component {
        constructor(){
            super();
            this.state = {
              loggedIn: false,
            }
        }

        componentDidMount(){
            this.setState({
                loggedIn: localStorage.getItem('loggedIn')
            })
        }

        render(){
            return this.state.loggedIn ? <Posts/> : <Login/>
        }
    }
}

export default authenticate;