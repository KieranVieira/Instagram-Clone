import React from 'react';
import Post from './Post'
import PropTypes from 'prop-types'
import './PostContainer.css'

const PostContainer = props => {
    return(
        <div className="post-container">
            {props.posts.map(post => {
                return <Post postData={post} key={post.timestamp}/>
            })}
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.array
}

export default PostContainer;