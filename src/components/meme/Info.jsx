import React, { useState } from 'react';
import StyledInfo from '../../styled/StyledInfo';
import useStore from '../../hooks/useStore';
import Favorites from './Favorites';
import Share from './Share';
import { useEffect } from 'react';


const Info = ({ title, url, meme }) => {

    const { store } = useStore();
    const [titleVisible, setTitleVisible] = useState(store.infoVisible);

    useEffect(() => {
        setTitleVisible(store.infoVisible);
    },[store.infoVisible])

    return (
        <StyledInfo visible={titleVisible} onClick={() => setTitleVisible(!titleVisible)}>
            <h3>{ title }</h3>
            {store.user ?
                <div onClick={(e) => e.stopPropagation()}>
                    <Favorites meme={meme} />
                    <Share meme={meme} />
                </div>
            : null}
        </StyledInfo>
    )
}

export default Info;