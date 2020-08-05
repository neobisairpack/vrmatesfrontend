export const ADD_POST = "ADD_POST";

export const addPost = post => {
    return ({
        type: ADD_POST,
        payload: post,
    })
}