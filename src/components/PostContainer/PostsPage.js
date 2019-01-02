import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar'
import FooterContainer from '../FooterContainer/FooterContainer'

class PostsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <SearchBar 
                    handleChange={this.props.handleChange}
                />
                <div className="page-content">
                    <PostContainer 
                    postData={this.props.dummyData}
                    />
                    <FooterContainer 
                        className="footer-position"
                    />
                </div>
            </>
        );
    }
}

export default PostsPage;