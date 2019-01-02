import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
import './App.css';

const AuthenticateComponent = Authenticate(PostsPage) 

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchInput: '',
      dummyData:[]
    }
  }

  componentDidMount(){
    this.setState({
      dummyData: dummyData
    })
    localStorage.setItem('loggedIn', false);
  }

  searchBar = e => {
    this.setState({
      dummyData: dummyData.filter(cv => {
          if(cv.username.includes(e.target.value)){
            return cv
          }
        })
    })
  }

  render() {
    return (
      <div className="App">
        <AuthenticateComponent 
          dummyData={this.state.dummyData}
          handleChange={this.searchBar}
        />
      </div>
    );
  }
}

export default App;
