import React, { PropTypes } from 'react';
import { autobind } from 'core-decorators';
import { Link } from 'react-router';
import CommentList from './CommentList';

@autobind
class PostItem extends React.Component {

    onMouseUp() {
        clearTimeout(this.timeout);
        this.loadComments();
    }

    onMouseLeave() {
        clearTimeout(this.timeout);
    }

    onMouseEnter() {
        this.timeout = setTimeout(() => {
            this.loadComments();
        }, 1000);
    }

    loadComments() {
        this.props.getComments(this.props.post.id, this.props.post.comments.length);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`user/${this.props.post.id}`}>
                            <div className="glyphicon glyphicon glyphicon-globe" style={{ marginRight: '10px' }} />
                        </Link>
                        <a
                          onMouseEnter={this.onMouseEnter}
                          onMouseLeave={this.onMouseLeave}
                          onMouseUp={this.onMouseUp}
                          onClick={(event) => { event.preventDefault(); }}
                          href
                        >
                            {this.props.post.title}
                        </a>
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="media">
                        <div className="media-body">
                            {this.props.post.body}
                        </div>
                    </div>
                </div>
                <hr />
                <CommentList comments={this.props.post.comments} />
            </div>
        );
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    getComments: PropTypes.func.isRequired
};

export default PostItem;
