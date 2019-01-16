import React from 'react';
import PostsPage from '../PostContainer/PostsPage'
import LoginPage from '../Login/Login'

const authenticate = Posts => Login => {
    return class extends React.Component {
        render(){
            return this.props.loggedIn ? <PostsPage search={this.props.search} posts={this.props.posts}/> : <Login login={this.props.login}/>
        }
    }
}

export default authenticate(PostsPage)(LoginPage);