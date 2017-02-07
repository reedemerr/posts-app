import { SHOW_LOADER, HIDE_LOADER } from '../constants/loaderActionTypes';

export function setLoaderState(showLoader) {
    return (dispatch) => {
        if (showLoader) {
            return dispatch({ type: SHOW_LOADER });
        }

        return dispatch({ type: HIDE_LOADER });
    };
}
