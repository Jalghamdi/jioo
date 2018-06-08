import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {
    render() {
        const { post } = this.props;

        return (
            <div>
                <p>{post.text}</p>
            </div>
        );
    }
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostItem;