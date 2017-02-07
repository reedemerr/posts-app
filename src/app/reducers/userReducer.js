import { GET_USER_SUCCESS } from '../constants/userActionTypes';

const initialState = {
    address: {},
    company: {}
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case GET_USER_SUCCESS:
        return { ...state, ...payload };
    default:
        return state;
    }
};


export default userReducer;
