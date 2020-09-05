import {
    GET_INBOX_POST_STARTED,
    REMOVE_INBOX_POST,
    GET_INBOX_POST_SUCCESS,
    GET_INBOX_POST_FAILURE,
    CHOOSE_YES_NO, CURRENT_CREATED_BY, SET_CURRENT_CREATED_BY, GET_ALL_POST_SUCCESS
} from "./profileActions";

const initialState = {
    inbox_posts: [],
    inprog_posts: [],
    completed_posts: [],
    currentCreatedBy: "",
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
            let arr1 = []
            action.payload.map((item) => {
                if(item.status === "Created, not accepted"){
                    arr1.push(item)
                }
            })
            console.log(arr1)
            return {
                ...state,
                loading: false,
                inbox_posts: arr1
            };
        case GET_ALL_POST_SUCCESS:
            let arr2 = []
            let arr3 = []
            action.payload.map((item) => {
                if(item.status === "Accepted/in process"){
                    arr2.push(item)
                }
                else if(item.status === "Successfully done"){
                    arr3.push(item)
                }
            })
            return{
                ...state,
                loading: false,
                inprog_posts: arr2,
                completed_posts: arr3
            }
        case GET_INBOX_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case CHOOSE_YES_NO:
            return {
                ...state,
                loading: false,
                choice: action.payload
            };
        case SET_CURRENT_CREATED_BY:
            console.log(action)
            return {
                ...state,
                loading: false,
                currentCreatedBy: action.payload
            };
    }
    return state
}
export default reducer
