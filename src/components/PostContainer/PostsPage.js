import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Footer from '../FooterContainer/Footer'

const PostsPage = (props) => {
    return(
        <>
            <SearchBar search={props.search}/>
            <div className="page-content">
                <PostContainer posts={props.posts}/>
                <Footer className="footer-position"/>
            </div>
        </>
    )
}

export default PostsPage