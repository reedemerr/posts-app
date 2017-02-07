import restRepository from '../repositories/restRepository';

import {
    GET_POSTS_SUCCESS,
    GET_COMMENTS_SUCCESS
} from '../constants/postActionTypes';

import {
    setLoaderState
} from './loaderActions';

const MAX_POSTS_PER_REQUEST = 10;
const MAX_COMMENTS_PER_REQUEST = 5;

export function getPosts(start) {
    return (dispatch) => {
        dispatch(setLoaderState(true));
        return restRepository.getPosts(start, MAX_POSTS_PER_REQUEST)
            .then((posts) => {
                dispatch({ type: GET_POSTS_SUCCESS, payload: posts });
                dispatch(setLoaderState(false));
            });
    };
}

export function getComments(postId, start) {
    return (dispatch) => {
        dispatch(setLoaderState(true));
        return restRepository.getComments(postId, start, MAX_COMMENTS_PER_REQUEST)
            .then((response) => {
                dispatch({ type: GET_COMMENTS_SUCCESS, payload: response });
                dispatch(setLoaderState(false));
            });
    };
}
