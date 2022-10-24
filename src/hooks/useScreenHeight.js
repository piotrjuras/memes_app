import { useEffect, useState } from 'react';

const useScreenHeight = () => {

    const [vh, setVh] = useState(0);
    const handleResize = () => {
        setVh(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    return { vh };
}

export default useScreenHeight;