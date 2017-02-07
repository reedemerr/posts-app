import { combineReducers } from 'redux';

import posts from './postsReducer';
import loader from './loaderReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    posts,
    loader,
    user
});

export default rootReducer;
