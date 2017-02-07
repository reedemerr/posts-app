import React, { PropTypes } from 'react';

function CommentList(props) {
    const comments = props.comments.map(comment => (
        <li key={comment.id} className="media">
            <div className="media-left">
                <div className="glyphicon glyphicon glyphicon-comment" />
            </div>
            <div className="media-body">
                <span className="text-muted pull-right">
                    <small className="text-muted">{comment.email}</small>
                </span>
                <strong className="text-success">{comment.name}</strong>
                <p>
                    {comment.body}
                </p>
            </div>
        </li>
    ));

    return (
        <ul className="media-list padding-v-30">
            {comments}
        </ul>
    );
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList;
