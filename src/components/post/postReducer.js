import {
    SEND_REQUEST_SUCCESS,
    SEND_REQUEST_FAILURE,
} from './postActions';

const initialState = {
    posts: [],
    image: {},
    loading: false,
    error: null,
    res: null,
}

const reducer = (state = initialState, action) => {
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
                error: null
            };
    }
    return state
}
export default reducer
