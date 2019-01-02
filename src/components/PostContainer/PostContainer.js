import React from 'react';
import Post from './Post';
import moment from 'moment';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => {
                return <Post 
                    username={post.username}
                    thumbnail={post.thumbnailUrl}
                    image={post.imageUrl}
                    likes={post.likes}
                    comments={post.comments}
                    time={moment(post.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()}
                />
            })}
            
        </div>
    )
}

PostContainer.propTypes = {
    username: PropTypes.string,
    thumbnail: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.shape([{
        username: PropTypes.string,
        text: PropTypes.string,
    }]),
    time: PropTypes.string,
}

export default PostContainer;