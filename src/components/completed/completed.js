import React from 'react';
import ScrollToTopControlller from '../scroll-to-top/scroll-to-top';
import Post from "../post";
const Completed = () => {
    return (
        <div className={"profile"}>
            <ScrollToTopControlller/>
            <Post/>
        </div>
    );
};

export default Completed;