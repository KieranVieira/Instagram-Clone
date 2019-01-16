import React, { Component } from 'react';
import dummyData from './assets/dummy-data';
import Authenticate from './components/Authenticate/authenticate';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postData: [],
      searchQuery: '',
      loggedIn: false,
    }
  }

  componentDidMount(){
    this.setState({
      postData: dummyData,
      loggedIn: localStorage.getItem('loggedIn')
    })
  }

  search = e => {
    this.setState({
      postData: dummyData.filter(post => {
        return post.username.includes(e.target.value)
      })
    })
  }

  login = e => {
    e.preventDefault();
    localStorage.setItem('username', e.target.username.value);
    localStorage.setItem('fullname', e.target.fullname.value);
    localStorage.setItem('password', e.target.password.value);
    localStorage.setItem('loggedIn', true);
    this.setState({loggedIn:true})
  }
  
  render() {
    return (
      <div className="App">
        <Authenticate 
          search={this.search} 
          posts={this.state.postData} 
          loggedIn={this.state.loggedIn}
          login={this.login}
        />
      </div>
    );
  }
}

export default App;
