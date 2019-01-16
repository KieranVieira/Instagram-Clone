import React from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'
import './CommentSection.css'

const CommentSection = props => {
    return(
        <div className="comment-container">
            {props.comments.map((comment,index) => {
                return <Comment comment={comment} key={index}/>
            })}
            <p className="time-stamp">{props.time}</p>
            <form className="comment-section" onSubmit={props.addComment}>
                <input 
                type="text" 
                placeholder="Add a comment..."
                onChange={props.handleChange}
                value={props.commentText}
                />
            </form>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array,
    time: PropTypes.string
}

export default CommentSection;