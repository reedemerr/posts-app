import { GET_POSTS_SUCCESS, GET_COMMENTS_SUCCESS } from '../constants/postActionTypes';

const initialState = {
    list: [],
};

const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case GET_POSTS_SUCCESS:
        return { ...state, list: [...state.list, ...payload] };
    case GET_COMMENTS_SUCCESS:
        return { ...state, list: mapComments(state.list, payload.comments, payload.postId) };
    default:
        return state;
    }
};

function mapComments(posts, comments, postId) {
    return posts.map((post) => {
        if (post.id !== postId) {
            return post;
        }
        return { ...post, comments: [...post.comments, ...comments] };
    });
}

export default postsReducer;
