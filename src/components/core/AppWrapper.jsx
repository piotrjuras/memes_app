import React, { useEffect } from 'react';
import useStore from '../../hooks/useStore';

const AppWrapper = ({ children }) => {

    const { store } = useStore();

    useEffect(() => {
        console.log(store);
    },[store])

    return <div >{ children }</div>

}

export default AppWrapper;