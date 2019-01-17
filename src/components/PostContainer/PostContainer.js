import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './Post';

const ContainerPost = styled.div`
    width: 610px;
    margin-top: 55px;
`;

const PostContainer = props => {
    return(
        <ContainerPost>
            {props.posts.map(post => {
                return <Post postData={post} key={post.timestamp}/>
            })}
        </ContainerPost>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.array
}

export default PostContainer;