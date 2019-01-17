import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components'

import CommentSection from '../CommentSection/CommentSection';

const PostComponent = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid lightgrey;
    margin-bottom: 55px;
    border-radius: 3px;
    @media (max-width: 660px){
        width: 98%;
        margin: 0 auto;
        margin-bottom: 25px;
    }
    .post-header{
        display: flex;
        align-items: center;
        margin: 15px;
        img{
            width: 30px;
            height: 30px;
            border-radius: 20px;
        }
        h1{
            margin: 0 0 2px 7px;
            font-size: 1.4rem;
            font-weight: 500;
        }
    }
    img{
        width: 100%;
        height: auto;
    }
    .post-icons{
        margin: 10px 15px 0 15px;
        p{
            font-size: 1.5rem;
            font-weight: 500;
            margin: 8px 0;
        }
        i{
            font-size: 3rem;
            margin-right: 20px;
        }
        .fa-heart{
            color: ${props => props.liked ? '#ED4956' : 'black'};
        }
    }
`;

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: localStorage.getItem('username'),
            comments: this.props.postData.comments,
            commentText: '',
            likes: this.props.postData.likes,
            liked: false,
            time: moment(this.props.postData.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()
        }
    }

    handleChange = e => {
        this.setState({
            commentText: e.target.value
        })
    }

    addComment = e => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {
                username: this.state.username, 
                text: this.state.commentText
                }
            ],
            commentText: ''
        })
    }

    likePost = e => {
        if(!this.state.liked) {
            this.setState({ likes: this.state.likes + 1, liked: true })
            e.target.className = 'fas fa-heart';
        } else{
            this.setState({ likes: this.state.likes - 1, liked: false })
            e.target.className = 'far fa-heart';
        }
    }

    render(){
        return(
            <PostComponent liked={this.state.liked}>
                <div className="post-header">
                    <img src={this.props.postData.thumbnailUrl} alt={`${this.props.postData.username} profile`}/>
                    <h1>{this.props.postData.username}</h1>
                </div>
                <img src={this.props.postData.imageUrl} alt={`${this.props.postData.username} Post`} className="main-img"/>
                <div className="post-icons">
                    <i className="far fa-heart" onClick={this.likePost}/>
                    <i className="far fa-comment" />
                    <div>
                        <p>{`${this.state.likes} likes`}</p>
                    </div>
                </div>
                <CommentSection 
                comments={this.state.comments} 
                time={this.state.time} 
                handleChange={this.handleChange}
                commentText={this.state.commentText}
                addComment={this.addComment}
                />
            </PostComponent>
        )
    }
}

Post.propTypes = {
    postData: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array,
        timestamp: PropTypes.string
    })
}

export default Post