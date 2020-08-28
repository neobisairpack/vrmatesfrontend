import {
    SEND_POST_STARTED,
    SEND_POST_SUCCESS,
    SEND_POST_FAILURE, GET_POST_IMAGES_SUCCESS, GET_POST_IMAGES_FAILURE
} from './createPostActions';

const initialState = {
    posts: [],
    images: [],
    isCreated: false,
    loading: true,
    error: null,
    res: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_POST_STARTED:
            return {
                ...state,
                loading: true
            };
        case SEND_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                res: action.payload,
                isCreated: true
            };
        case SEND_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case GET_POST_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: action.payload,
            };
        case GET_POST_IMAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
    }
    return state
}
export default reducer
