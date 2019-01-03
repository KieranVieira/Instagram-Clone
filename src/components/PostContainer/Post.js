import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const Post = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <a href="https://kieranvieira.com/"><img src={props.thumbnail} /></a>
                <h1><a href="https://kieranvieira.com/">{props.username}</a></h1>
            </div>
            <img src={props.image} />
            <CommentSection 
                comments = {props.comments}
                likes = {props.likes}
            />
        </div>
    )
}

export default Post;