import * as actions from './createPostActions';
const initialState = {
    requester: null,
    provider: null,
    pickup_location: "",
    drop_off_location: "",
    deadline: "",
    status: "Created, not accepted",
    title: "",
    text: "",
    image: null,
    is_checked: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_POST:
            const newPost = {
                requester: 1,
                provider: null,
                pickup_location: "d",
                drop_off_location: "fdv",
                deadline: "2020-09-23",
                status: "Created, not accepted",
                title: "dvfd",
                text: "fvfd",
                image: null,
                is_checked: false
            }
            return{
                ...state,
                ...newPost
            }
    }
    return state
}
export default reducer