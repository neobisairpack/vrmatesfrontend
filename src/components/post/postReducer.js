import {
    SEND_REQUEST_SUCCESS,
    SEND_REQUEST_FAILURE,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILURE,
    SET_CURRENT_USER
} from './postActions';

const initialState = {
    posts: [],
    interested: [],
    curUser: {},
    image: {},
    loading: false,
    error: null,
    res: null,
}

const reducer = (state = initialState, action) => {
    let GET_REQUEST_FAILURE;
    switch (action.type) {
        case SEND_REQUEST_SUCCESS:
            return {
                ...state,
                loading: true
            };
        case SEND_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                interested: action.payload
            };
        case GET_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                curUser: action.payload
            };
    }
    return state
}
export default reducer
