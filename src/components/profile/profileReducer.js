import {
    GET_INBOX_POST_STARTED,
    REMOVE_INBOX_POST,
    GET_INBOX_POST_SUCCESS,
    GET_INBOX_POST_FAILURE,
    CHOOSE_YES_NO
} from "./profileActions";

const initialState = {
    inbox_posts: [],
    inprog_posts: [],
    completed_posts: [],
    loading: true,
    error: null,
    choice: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_INBOX_POST:
            return {
                ...state,
                loading: true
            };
        case GET_INBOX_POST_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_INBOX_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                inbox_posts: action.payload
            };
        case GET_INBOX_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case CHOOSE_YES_NO:
            console.log(action)
            return {
                ...state,
                loading: false,
                choice: action.payload
            };
    }
    return state
}
export default reducer
