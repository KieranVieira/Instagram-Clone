import React from 'react';
import PropTypes from 'prop-types'

const Comment = props => {
    return(
        <div className="comment">
            <p><a href="https://kieranvieira.com/">{props.comment.username}</a>{props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment