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

const mainURL = "http://167.172.178.135:8000"
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
                let reqData = req.data.filter((item) => item.requester.id === id) || [];
                let reqData1 = req.data.filter((item) => item.provider ? item.provider.id === id : null) || [];
                let provData = prov.data.filter((item) => item.provider.id === id) || [];
                let provData1 = prov.data.filter((item) => item.requester ? item.requester.id === id : null) || [];
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

export const editPost = (post, img1, img2) => {
    const fd1 = new FormData();
    fd1.append('image', img1)
    const fd2 = new FormData();
    fd2.append('image', img2)

    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(getInboxPostStarted());
        axios.all([
            axios.put(`${mainURL}/api/services/${post.id}/`, {
                pickup_location: (post.country1).concat(",", post.state1, ",", post.city1),
                drop_off_location: (post.country2).concat(",", post.state2, ",", post.city2),
                requester_from: (post.country1).concat(" ", post.state1, " ", post.city1),
                location: (post.country2).concat(" ", post.state2, " ", post.city2),
                deadline: (post.year).concat("-", post.month, "-", post.day),
                status: "Created, not accepted",
                title: post.title,
                text: post.text,
                preferences: post.preferences || "",
            },
                {headers: {
                        "Authorization": "Token " + token
                    }}),
                post.img1 ?
                    axios.put(`${mainURL}/api/services-images/${post.img1.id}/`, fd1, {
                        headers: {
                            "Authorization": "Token " + token,
                            'Content-Type': 'multipart/form-data'
                        }
                    }) : fd1.append('post', post.id),
                axios.post(`${mainURL}/api/services-images/`, fd1, {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }),
            post.img2 ?
                axios.put(`${mainURL}/api/services-images/${post.img2.id}/`, fd2, {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }) : fd2.append('post', post.id),
            axios.post(`${mainURL}/api/services-images/`, fd2, {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }),
        ])
            .then(axios.spread(function(req, prov) {
                console.log(req, prov)
               // dispatch(editPostSuccess(res.data));
            }))
            .catch(err => {
                dispatch(getInboxPostFailure(err));
            });
    };
};

export const editPostProvide = (post, img1, img2) => {
    const fd1 = new FormData();
    fd1.append('image', img1)
    //fd1.append('post', post.id)
    const fd2 = new FormData();
    fd2.append('image', img2)
    //fd2.append('post', post.id)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(getInboxPostStarted());
        axios.all([
            axios.put(`${mainURL}/api/provide-services/${post.id}/`, {
                    pickup_location: (post.country1).concat(",", post.state1, ",", post.city1),
                    drop_off_location: (post.country2).concat(",", post.state2, ",", post.city2),
                    requester_from: (post.country1).concat(" ", post.state1, " ", post.city1),
                    location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    status: "Created, not accepted",
                    title: post.title,
                    text: post.text,
                    preferences: post.preferences || "",
                },
                {headers: {
                        "Authorization": "Token " + token
                    }}),
            post.img1 ?
                axios.put(`${mainURL}/api/provide-services-images/${post.img1.id}/`, fd1, {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }) :  fd1.append('post', post.id),
                axios.post(`${mainURL}/api/provide-services-images/`, fd1, {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }),
            post.img2 ?
                axios.put(`${mainURL}/api/provide-services-images/${post.img2.id}/`, fd2, {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }) : fd2.append('post', post.id),
                axios.post(`${mainURL}/api/provide-services-images/`, fd2, {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }),
        ])
            .then(axios.spread(function(req, prov) {
                console.log(req, prov)
                // dispatch(editPostSuccess(res.data));
            }))
            .catch(err => {
                dispatch(editPostFailure(err));
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
                dispatch(editPostSuccess(res.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(editPostFailure(err));
            });
    };
};

export const changePostStatusProvide = (post, status) => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(status)
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
                dispatch(editPostSuccess(res.data));
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