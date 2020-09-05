import axios from 'axios';
export const SEND_POST_STARTED = "SEND_POST_STARTED";
export const SEND_POST_SUCCESS = "SEND_POST_SUCCESS";
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";
export const GET_POST_IMAGES_SUCCESS = "GET_POST_IMAGES_SUCCESS";
export const GET_POST_IMAGES_FAILURE = "GET_POST_IMAGES_FAILURE";

const mainURL = "http://167.172.178.135:8000"
export const sendPostDelivery = (post, img1, img2) => {
    const fd = new FormData();
    fd.append('image1', img1)
    fd.append('image2', img2)
    fd.append('status', "Created, not accepted")
    fd.append('service_type', "Delivery")
    fd.append("pickup_location", (post.country1).concat(",", post.state1, ",", post.city1))
    fd.append('drop_off_location', (post.country2).concat(",", post.state2, ",", post.city2))
    fd.append('deadline', (post.year).concat("-", post.month, "-", post.day))
    fd.append('title', post.title)
    fd.append('text', post.text)

    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`${mainURL}/api/services/`, fd,
                {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
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
            .post(`${mainURL}/provide-services/`, {
                    pickup_location: (post.country1).concat(",", post.state1, ",", post.city1),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    drop_off_location: (post.country2).concat(",", post.state2, ",", post.city2),
                    arrive_date: (post.year2).concat("-", post.month2, "-", post.day2, "T12:07:46Z"),
                    status: "Created, not accepted",
                    service_type: "Delivery",
                    title: post.title,
                    text: post.text,
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token,
                        "Content-Type": "application/json"
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
            .post(`${mainURL}/api/services/`, {
                    pickup_location: (post.country1).concat(",", post.state1, ",", post.city1),
                    drop_off_location: (post.country2).concat(",", post.state2, ",", post.city2),
                    deadline: (post.year).concat("-", post.month, "-", post.day),
                    status: "Created, not accepted",
                    service_type: "Pick Up",
                    title: post.title,
                    text: post.text,
                    is_checked: false
                },
                {
                    headers: {
                        "Authorization": "Token " + token,
                        "Content-Type": "application/json"
                    }
                }

            )
            .then(res => {
                console.log(res.data)
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                console.log(post)
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendProviderAirport = (post) => {
    console.log((post.year).concat("-", post.month, "-", post.day))
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`${mainURL}/api/provide-services/`, {
                    pickup_location: (post.country1).concat(",", post.state1, ",", post.city1),
                    deadline: "2020-01-05",
                    status: "Created, not accepted",
                    service_type: "Pick Up",
                    title: post.title,
                    text: post.text,
                },
                {
                    headers: {
                        "Authorization": "Token " + token,
                        "Content-Type": "application/json"
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
            .post(`${mainURL}/api/services/`, {
                    requester_from: (post.country1).concat(",", post.state1, ",", post.city1),
                    pickup_location: (post.country1).concat(",", post.state1, ",", post.city1),
                    location: (post.country2).concat(",", post.state2, ",", post.city2),
                    drop_off_location: (post.country2).concat(",", post.state2, ",", post.city2),
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
                        "Authorization": "Token " + token,
                        "Content-Type": "application/json"
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

export const sendProviderHosting = (post, img1, img2) => {
    const fd = new FormData();
    fd.append('image1', img1)
    fd.append('image2', img2)
    fd.append('status', "Created, not accepted")
    fd.append('service_type', "Hosting")
    fd.append("pickup_location", (post.country1).concat(",", post.state1, ",", post.city1))
    fd.append("location", (post.country1).concat(",", post.state1, ",", post.city1))
    fd.append('deadline', (post.year).concat("-", post.month, "-", post.day))
    fd.append('title', post.title)
    fd.append('text', post.text)
    fd.append('preferences', post.preferences)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`${mainURL}/api/provide-services/`, fd,
                {
                    headers: {
                        "Authorization": "Token " + token,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then(res => {
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendPostFailure(err));
            });
    };
};

export const getPostImages = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted())
        axios
            .get(`${mainURL}/api/services-images/`,
                {
                    headers: {
                        "Authorization": "Token " + token,
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(res => {
                let images = []
                res.data.map((item) => {
                    if(item.post === id){
                       images.push(item)
                    }
                })
                console.log(id, res.data)
                dispatch(getPostImagesSuccess(images));
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