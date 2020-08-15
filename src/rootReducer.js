import {combineReducers} from "redux";
import CreatePostReducer from './components/create-post/createPostReducer';
import SidebarReducer from './components/sidebar/sidebarReducer';
export default combineReducers({
    createPost: CreatePostReducer,
    userData: SidebarReducer
})