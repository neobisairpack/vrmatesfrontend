import axios from 'axios';
export const SEND_POST_STARTED = "SEND_POST_STARTED";
export const SEND_POST_SUCCESS = "SEND_POST_SUCCESS";
export const SEND_POST_FAILURE = "SEND_POST_FAILURE";
export const GET_POST_IMAGES_SUCCESS = "GET_POST_IMAGES_SUCCESS";
export const GET_POST_IMAGES_FAILURE = "GET_POST_IMAGES_FAILURE";
export const RESET_IS_CREATED = "RESET_IS_CREATED";

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
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendProviderDelivery = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        dispatch(sendPostStarted());
        axios
            .post(`${mainURL}/api/provide-services/`, {
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
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendPostAirport = (post) => {
    let token = JSON.parse(localStorage.getItem("token"));return dispatch => {
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
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
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
                    deadline: (post.year).concat("-", post.month, "-", post.day),
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
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
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
                dispatch(sendPostSuccess(res.data));
            })
            .catch(err => {
                dispatch(sendPostFailure(err));
            });
    };
};

export const sendProviderHosting = (post, img1, img2) => {
    const fd = new FormData();
    console.log(img1, img2)
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
                dispatch(getPostImagesSuccess(images));
            })
            .catch(err => {
                dispatch(getPostImagesFailure(err));
            });
    };
};

export const editPost = (post, img1, img2) => {
    const fd1 = new FormData();
    fd1.append('image', img1)
    const fd2 = new FormData();
    fd2.append('image', img2)
    console.log(post.img1)
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        //dispatch(getInboxPostStarted());
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
                dispatch(req.concat(prov));
            }))
            .catch(err => {
                dispatch(sendPostFailure(err));
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
        //dispatch(getInboxPostStarted());
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
                dispatch(sendPostSuccess(req.concat(prov)));
            }))
            .catch(err => {
                dispatch(sendPostFailure(err));
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

export const resetIsCreated = () => ({
    type: RESET_IS_CREATED,
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