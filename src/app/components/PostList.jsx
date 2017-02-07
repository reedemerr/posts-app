import React, { PropTypes } from 'react';
import { autobind } from 'core-decorators';

import PostItem from './PostItem';

@autobind
class PostList extends React.Component {

    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.loadPosts();
        }
    }

    loadPosts() {
        this.props.getPosts(this.props.posts.length);
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <PostItem key={post.id} post={post} getComments={this.props.getComments} />
        ));

        return (
            <div className="container padding-v-30">
                <div className="row">
                    {postItems}
                </div>
                <div className="row">
                    {this.props.posts.length > 0 && (
                        <button type="button" className="btn btn-primary" onClick={this.loadPosts}>
                            Load more
                        </button>
                    )}
                </div>
            </div>
        );
    }

}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired
};

export default PostList;
