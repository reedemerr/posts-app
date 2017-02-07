import restRepository from '../repositories/restRepository';
import {
    GET_USER_SUCCESS
} from '../constants/userActionTypes';

import {
    setLoaderState
} from './loaderActions';

export function getUser(userId) {
    return (dispatch) => {
        dispatch(setLoaderState(true));
        return restRepository.getUser(userId)
            .then((user) => {
                dispatch({ type: GET_USER_SUCCESS, payload: user });
                dispatch(setLoaderState(false));
            });
    };
}
