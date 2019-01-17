import React, { Component } from 'react';

import authenticate from './components/Authenticate/authenticate';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }

  
  render() {
    return (
      <div className="App">
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = authenticate(PostsPage)(LoginPage)

export default App;

