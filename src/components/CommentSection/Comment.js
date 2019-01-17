import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentComponent = styled.div`
    font-size: 1.35rem;
    margin: unset;
    p{
        margin: 0 0 8px 0;
    }
    a{
        color: black;
        text-decoration: none;
        font-weight: 500;
        margin-right: 5px;
    }
`;

const Comment = props => {
    return(
        <CommentComponent>
            <p><a href="https://kieranvieira.com/">{props.comment.username}</a>{props.comment.text}</p>
        </CommentComponent>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment