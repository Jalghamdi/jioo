import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';


class PostFeed extends  Component {
    render () {
    const { Posts } = this.props;
    return Posts.map(post=> <PostItem key ={post._id} post={post} />);
    }
};

PostFeed.peopTypes = {
    posts: PropTypes.array.isRequired
};
export default PostFeed;
