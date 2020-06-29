
import { useEffect, useState } from 'react';

const ScrollToTopControlller = () => {
    const  { pathname, search } = useState();

    useEffect(() => {
        try {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, [pathname, search]);

    return null;
};

export default ScrollToTopControlller;