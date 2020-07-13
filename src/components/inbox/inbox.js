import React, {useState} from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import FullProfile from "../profile/fullProfile";
import Post from "../post";
const Inbox = () => {
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <Post/>
        </div>
    );
};

export default Inbox;