import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const Post = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={props.thumbnail} />
                <h1>{props.username}</h1>
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