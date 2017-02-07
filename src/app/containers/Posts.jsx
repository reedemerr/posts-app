import { connect } from 'react-redux';
import * as postActions from '../actions/postActions';
import PostList from '../components/PostList';

function mapStateToProps(store) {
    const { list } = store.posts;
    return {
        posts: list
    };
}

export default connect(mapStateToProps, postActions)(PostList);
