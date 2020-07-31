import React, {useState} from "react";
import CreatePost from './create-post';
import axios from 'axios';

const CreatePostContainer = (props) => {
    const createPostRequest = () => {
        axios.post('http://167.172.178.135/api/service/', {

        })
            .then((res) => {

            })
            .catch((err) => {
                console.log("Logging in error " + err)
            })
    }
    return (
        <CreatePost {...props}/>
    )
}
export default CreatePostContainer;