import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import moment from 'moment';

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
        console.log('liked');
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
            <div className="post">
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
            </div>
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