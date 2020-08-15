import {
    SEND_POST_STARTED,
    SEND_POST_SUCCESS,
    SEND_POST_FAILURE} from './createPostActions';

const initialState = {
    posts: [],
    loading: false,
    error: null,
    res: null,
    message: ""
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
                message: "Post is created, it will appear in a while!"
            };
        case SEND_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                message: "Post is not created, check all fields"
            };
    }
    return state
}
export default reducer
