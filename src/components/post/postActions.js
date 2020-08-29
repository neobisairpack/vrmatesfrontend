import axios from 'axios';
export const SEND_REQUEST_SUCCESS = "SEND_REQUEST_SUCCESS";
export const GET_DASHBOARD_POSTS_SUCCESS = "GET_DASHBOARD_POSTS_SUCCESS";
export const SEND_REQUEST_FAILURE = "SEND_REQUEST_FAILURE";
export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";
export const GET_REQUEST_PROV_SUCCESS = "GET_REQUEST_PROV_SUCCESS";
export const GET_REQUEST_REQ_SUCCESS = "GET_REQUEST_REQ_SUCCESS";
export const GET_REQUEST_FAILURE = "GET_REQUEST_SUCCESS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const getPostsDashboard = (url) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        //dispatch(get)
        axios.get(`https://vrmates.co/api/${url}/`, {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(res => {
                let posts = []
                res.data.map((item) => {
                    if(item.status === "Created, not accepted"){
                        posts.push(item)
                    }
                })
                dispatch(getDashboardPostsSuccess(posts))
            })
            .catch((err) => dispatch(getRequestFailure(err)))
    };
};

export const filterPosts = (url, deadline, type) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        //dispatch(get)
        axios.get(`https://www.vrmates.co/api/service-filters/?status=Created%2C+not+accepted&deadline=${deadline}&service_type=${type}`, {
            headers: {
                "Authorization": "Token " + token
            }
        })
            .then(res => {
                console.log(res.data)
                console.log(`https://www.vrmates.co/api/service-filters/?status=Created%2C+not+accepted&deadline=${deadline}&service_type=${type}`)
                dispatch(getDashboardPostsSuccess(res.data))
            })
            .catch((err) => {
                console.log(err)
                dispatch(getRequestFailure(err))
            })
    };
};

export const sendInterestedRequest = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .post(`https://vrmates.co/api/request-services/`, {
                    service: id,
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                console.log(res.data)
                dispatch(sendRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendRequestFailure(err));
            });
    };
};

export const sendInterestedRequestProvide = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .post(`https://vrmates.co/api/request-provide-services/`, {
                    service: id,
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                console.log(res.data)
                dispatch(sendRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendRequestFailure(err));
            });
    };
};

export const getInterestedRequest = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .get(`https://vrmates.co/api/request-services/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                dispatch(getRequestReqSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRequestFailure(err));
            });
    };
};

export const getInterestedRequestById = (createdBy, id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    let url = "";
    if(createdBy === "Requester") url = 'request-services'
    else if (createdBy === "Provider") url = 'request-provide-services'
    return dispatch => {
        axios
            .get(`https://vrmates.co/api/${url}/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                    const myRes = []
                    res.data.map((item) => {
                        if(item.service.id === id)
                            myRes.push(item)
                    })
                console.log(myRes)
                    dispatch(getRequestSuccess(myRes));
            })
            .catch(err => {
                dispatch(getRequestFailure(err));
            });
    };
};

export const getInterestedRequestProvide = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        console.log("request")
        axios
            .get(`https://vrmates.co/api/request-provide-services/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                dispatch(getRequestProvSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRequestFailure(err));
            });
    };
};
export const changeStatusRequest = (req, status) => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(req, status)
    return dispatch => {
        axios
            .put(`https://vrmates.co/api/request-services/${req.id}/`, {
                    status: status,
                    service: req.service.id,
                    accept: status === "Accepted"
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                console.log(res.data)
                dispatch(sendRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendRequestFailure(err));
            });
    };
};

export const changeStatusRequestProvide = (req, status) => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(req, status)
    return dispatch => {
        axios
            .put(`https://vrmates.co/api/request-provide-services/${req.id}/`, {
                    status: status,
                    service: req.service.id,
                    accept: status === "Accepted"
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }
            )
            .then(res => {
                console.log(res.data)
                dispatch(sendRequestSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendRequestFailure(err));
            });
    };
};
const sendRequestSuccess = (data) => ({
    type: SEND_REQUEST_SUCCESS,
    payload: data
});

const sendRequestFailure = (error) => ({
    type: SEND_REQUEST_FAILURE,
    payload: error
});
const getRequestProvSuccess = (data) => ({
    type: GET_REQUEST_PROV_SUCCESS,
    payload: data
});

const getRequestReqSuccess = (data) => ({
    type: GET_REQUEST_REQ_SUCCESS,
    payload: data
});
const getDashboardPostsSuccess = (data) => ({
    type: GET_DASHBOARD_POSTS_SUCCESS,
    payload: data
});
const getRequestSuccess = (data) => ({
    type: GET_REQUEST_SUCCESS,
    payload: data
});

const getRequestFailure = (error) => ({
    type: GET_REQUEST_FAILURE,
    payload: error
});
export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
});