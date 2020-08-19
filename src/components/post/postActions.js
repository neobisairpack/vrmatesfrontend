import axios from 'axios';
export const SEND_REQUEST_SUCCESS = "SEND_REQUEST_SUCCESS";
export const SEND_REQUEST_FAILURE = "SEND_REQUEST_FAILURE";

export const sendInterestedRequest = (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    return dispatch => {
        axios
            .post(`http://167.172.178.135/api/request-services/`, {
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

// export const getInterestedRequest = (id) => {
//     let token = JSON.parse(localStorage.getItem("token"));
//     return dispatch => {
//
//         axios
//             .get(`http://167.172.178.135/api/services-images/`,
//                 {
//                     headers: {
//                         "Authorization": "Token " + token
//                     }
//                 }
//
//             )
//             .then(res => {
//                 res.data.map((item) => {
//                     if(item.post === id){
//                         dispatch(getPostImagesSuccess(item));
//                     }
//                 })
//             })
//             .catch(err => {
//                 console.log(token)
//                 dispatch(getPostImagesFailure(err));
//             });
//     };
// };

const sendRequestSuccess = (data) => ({
    type: SEND_REQUEST_SUCCESS,
    payload: data
});

const sendRequestFailure = (error) => ({
    type: SEND_REQUEST_FAILURE,
    payload: error
});
// const getRequestSuccess = (data) => ({
//     type: GET_POST_IMAGES_SUCCESS,
//     payload: data
// });
//
// const getRequestFailure = (error) => ({
//     type: GET_POST_IMAGES_FAILURE,
//     payload: error
// });