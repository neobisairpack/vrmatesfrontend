import {combineReducers} from "redux";
import CreatePostReducer from './components/create-post/createPostReducer';
import SidebarReducer from './components/sidebar/sidebarReducer';
import ProfileReducer from './components/profile/profileReducer';
export default combineReducers({
    createPost: CreatePostReducer,
    userData: SidebarReducer,
    profilePost: ProfileReducer
})