import React from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Footer from '../FooterContainer/Footer';
import dummyData from '../../assets/dummy-data';

const PageContent = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    .footer-position{
        display: flex;
        align-self: flex-start;
    }
`;

class PostsPage extends React.Component{
    constructor(){
        super();
        this.state = {
            postData: [],
            searchQuery: '',
        }
    } 

    componentDidMount(){
        this.setState({
        postData: dummyData,
        })
    }

    search = e => {
        this.setState({
        postData: dummyData.filter(post => {
            return post.username.includes(e.target.value)
            })
        })
    }

    render(){
        return(
            <>
                <SearchBar search={this.search}/>
                <PageContent>
                    <PostContainer posts={this.state.postData}/>
                    <Footer className="footer-position"/>
                </PageContent>
            </>
        )
    }
}

export default PostsPage