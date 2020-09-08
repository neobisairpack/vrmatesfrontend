import {
    SEND_POST_STARTED,
    SEND_POST_SUCCESS,
    SEND_POST_FAILURE, GET_POST_IMAGES_SUCCESS, GET_POST_IMAGES_FAILURE, RESET_IS_CREATED
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
            let err = ""
            if(action.payload.id === null){
                err = "error"
            }
            return {
                ...state,
                loading: false,
                error: err,
                res: action.payload,
                isCreated: true
            };
        case RESET_IS_CREATED:
            return {
                ...state,
                isCreated: false
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
