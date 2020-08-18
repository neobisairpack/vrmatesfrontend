import axios from 'axios';
export const SEND_POST_STARTED = "SEND_POST_STARTED";
export const SEND_POST_SUCCESS = "SEND_POST_SUCCESS";
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";
export const GET_POST_IMAGES_SUCCESS = "GET_POST_IMAGES_SUCCESS";
export const GET_POST_IMAGES_FAILURE = "GET_POST_IMAGES_FAILURE";

export const sendPostDelivery = (post, image) => {
    const fd = new FormData();
    fd.append("pickup_location", (post.country1).concat(" ", post.state1, " ", post.city1))
    fd.append('drop_off_location', (post.country2).concat(" ", post.state2, " ", post.city2))
    fd.append('deadline', (post.year).concat("-", post.month, "-", post.day))
    fd.append('title', post.title)
    fd.append('text', post.text)
    fd.append('image', image)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/services/`, fd,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendProviderDelivery = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/provide-services/`, {
                    pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    deadline: (post.year1).concat("-", post.month1, "-", post.day1),
                    drop_off_location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    arrive_date: (post.year2).concat("-", post.month2, "-", post.day2, "T12:07:46Z"),
                    status: "Created, not accepted",
                    service_type: "Delivery",
                    title: post.title,
                    text: post.text,
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendPostAirport = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/services/`, {
                    pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    drop_off_location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    deadline: (post.year).concat("-", post.month, "-", post.day, "T12:07:46Z"),
                    status: "Created, not accepted",
                    service_type: "Pick Up",
                    title: post.title,
                    text: post.text,
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendProviderAirport = (post) => {
    console.log(post)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/provide-services/`, {
                    pickup_location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    status: "Created, not accepted",
                    service_type: "Pick Up",
                    title: post.title,
                    text: post.text,
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(sendPostFailure(err));
            });
    };
};
export const sendPostHosting = (post) => {
    console.log(post.year, post.month, post.day, typeof post.year)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/services/`, {
                    requester_from: (post.country1).concat(" ", post.state1, " ", post.city1),
                    location: (post.country2).concat(" ", post.state2, " ", post.city2),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    status: "Created, not accepted",
                    service_type: "Hosting",
                    title: post.title,
                    text: post.text,
                    preferences: post.preferences,
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendProviderHosting = (post) => {
    console.log(post.year, post.month, post.day, typeof post.year)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`http://167.172.178.135/api/provide-services/`, {
                    location: (post.country1).concat(" ", post.state1, " ", post.city1),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    status: "Created, not accepted",
                    service_type: "Hosting",
                    title: post.title,
                    text: post.text,
                    preferences: post.preferences,
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(token)
                dispatch(sendPostFailure(err));
            });
    };
};

export const getPostImages = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {

        axios
            .get(`http://167.172.178.135/api/services-images/`,
                {
                    headers: {
                        "Authorization": "Token " + token
                    }
                }

            )
            .then(res => {
                res.data.map((item) => {
                    if(item.post === id){
                        dispatch(getPostImagesSuccess(item));
                    }
                })
            })
            .catch(err => {
                console.log(token)
                dispatch(getPostImagesFailure(err));
            });
    };
};
const sendPostStarted = () => ({
    type: SEND_POST_STARTED
});

const sendPostSuccess = (data) => ({
    type: SEND_POST_SUCCESS,
    payload: data
});

const sendPostFailure = (error) => ({
    type: SEND_POST_FAILURE,
    payload: error
});
const getPostImagesSuccess = (data) => ({
    type: GET_POST_IMAGES_SUCCESS,
    payload: data
});

const getPostImagesFailure = (error) => ({
    type: GET_POST_IMAGES_FAILURE,
    payload: error
});