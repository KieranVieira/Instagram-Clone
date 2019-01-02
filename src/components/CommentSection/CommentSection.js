import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username: localStorage.getItem('username'),
            commentText: '',
            likes: this.props.likes,
            comments: this.props.comments,
        }
    }

    changeHandler = e => {
        this.setState({
            commentText: e.target.value
        })
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {
                username: this.state.username, 
                text: this.state.commentText
                }
            ]
        })
        console.log(this.state.comments)
    }

    like = e => {
        console.log('clicked')
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render(){
        return(
            <div className="post-bottom">
                <div className="like-comment">
                    <i className="far fa-heart" onClick={this.like}></i>
                    <i className="far fa-comment"></i>
                </div>
                <p>{`${this.state.likes} likes`}</p>

                <div className="comment-container">
                    {this.state.comments.map(comment => {
                        return (
                        <div className="comment">
                            <h1> <a href="#">{comment.username}</a></h1>
                            <p>{comment.text}</p>
                        </div>
                        )
                    })}
                </div>

                <p className="post-time">{this.props.time}</p>
                
            
                <form className="add-comment" onSubmit={this.addNewComment}>
                    <input type="text" placeholder="Add a comment..." onChange={this.changeHandler}/>
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }

}

export default CommentSection;