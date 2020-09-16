import axios from 'axios';
import {batch} from "react-redux";
export const REMOVE_INBOX_POST = "REMOVE_INBOX_POST";
export const GET_INBOX_POST_STARTED = "GET_INBOX_POST_STARTED";
export const GET_INBOX_POST_SUCCESS = "GET_INBOX_POST_SUCCESS";
export const GET_ALL_POST_SUCCESS = "GET_ALL_POST_SUCCESS";
export const GET_INBOX_POST_FAILURE = "GET_INBOX_POST_FAILURE";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";
export const CHOOSE_YES_NO = "CHOOSE_YES_NO";
export const SET_CURRENT_CREATED_BY = "CURRENT_CREATED_BY";

const mainURL = "https://vrmates.co/backend"
export const getPosts = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    let id = JSON.parse(localStorage.getItem("num"));
    return dispatch => {
        dispatch(getInboxPostStarted());
        axios.all([
            axios.get(`${mainURL}/api/services/`, {headers: {
                    "Authorization": "Token " + token
                }}),
            axios.get(`${mainURL}/api/provide-services/`, {headers: {
                    "Authorization": "Token " + token
                }})
        ])
            .then(axios.spread(function(req, prov){
                let reqData = req.data.filter((item) => item.requester.id === id).reverse() || [];
                let reqData1 = req.data.filter((item) => item.provider ? item.provider.id === id : null).reverse() || [];
                let provData = prov.data.filter((item) => item.provider.id === id).reverse() || [];
                let provData1 = prov.data.filter((item) => item.requester ? item.requester.id === id : null).reverse() || [];
                reqData.forEach((it) =>{
                    it["createdBy"] = "Requester"
                })
                reqData1.forEach((it) =>{
                    it["createdBy"] = "Requester"
                })
                provData.forEach((it) =>{
                    it["createdBy"] = "Provider"
                })
                provData1.forEach((it) =>{
                    it["createdBy"] = "Provider"
                })
                let res = reqData.concat(reqData1).concat(provData).concat(provData1)
                    dispatch(getInboxPostSuccess(reqData.concat(provData)))
                    dispatch(getAllPostSuccess(res))
            }) )
            .catch(err => {
                dispatch(getInboxPostFailure(err));
            });
    };
};

export const changePostStatus = (post, status) => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(status, post)
    return dispatch => {
        dispatch(getInboxPostStarted());
        axios
            .put(`${mainURL}/api/services/${post.id}/`, {
                    status: status,
                    deadline: post.deadline,
                    id: post.id
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(addCanceledPosts());
            })
            .catch(err => {
                console.log(err)
                dispatch(editPostFailure(err));
            });
    };
};

const addCanceledPosts = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    axios
        .get(`${mainURL}/users/me/`, {
            headers: {
                "Authorization": "Token " + token
            }
        })
        .then(res => {
            axios
                .post(`${mainURL}/users/update/`, {
                    canceled_posts: res.data.canceled_posts + 1
                }, {
                    headers: {
                        "Authorization": "Token " + token
                    }
                })
                .then(res => {
                    console.log(res)
                    console.log(res.data.canceled_posts + 1)
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })

}

export const changePostStatusProvide = (post, status) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(getInboxPostStarted());
        axios
            .put(`${mainURL}/api/provide-services/${post.id}/`, {
                    status: status,
                    deadline: post.deadline
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(addCanceledPosts());
            })
            .catch(err => {
                dispatch(editPostFailure(err));
            });
    };
};


const getInboxPostStarted = () => ({
    type: GET_INBOX_POST_STARTED
});

const getInboxPostSuccess = (data) => ({
    type: GET_INBOX_POST_SUCCESS,
    payload: data
});

const getAllPostSuccess = (data) => ({
    type: GET_ALL_POST_SUCCESS,
    payload: data
});

export const chooseYesNo = (data) => ({
    type: CHOOSE_YES_NO,
    payload: data
});

export const setCurrentCreatedBy = (data) => ({
    type: SET_CURRENT_CREATED_BY,
    payload: data
});

const getInboxPostFailure = (error) => ({
    type: GET_INBOX_POST_FAILURE,
    payload: error
});
const editPostSuccess = (data) => ({
    type: EDIT_POST_SUCCESS,
    payload: data
});
const editPostFailure = (error) => ({
    type: EDIT_POST_FAILURE,
    payload: error
});