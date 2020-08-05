import {combineReducers} from "redux";
import CreatePostReducer from './components/create-post/createPostReducer';
export default combineReducers({
    createPost: CreatePostReducer
})