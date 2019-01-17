import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Comment from './Comment'
import './CommentSection.css'

const CommentContainer = styled.div`
    margin: 0 15px;
    input{
        border: unset;
        border-top: 1px solid lightgrey;
        margin: 10px 0 0 0;
        padding: 20px 0;
        width: 100%;
    }
    form input{
        &::placeholder{
            font-weight: 500;
        }
        &:focus{
            outline: none;
        }
    }
`;

const TimeStamp = styled.p`
    color: grey;
    font-weight: 500;
    margin: unset;
    font-size: 1.3rem;
`;

const CommentSection = props => {
    return(
        <CommentContainer>
            {props.comments.map((comment,index) => {
                return <Comment comment={comment} key={index}/>
            })}
            <TimeStamp>{props.time}</TimeStamp>
            <form onSubmit={props.addComment}>
                <input 
                type="text" 
                placeholder="Add a comment..."
                onChange={props.handleChange}
                value={props.commentText}
                />
            </form>
        </CommentContainer>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.array,
    time: PropTypes.string
}

export default CommentSection;