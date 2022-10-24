import React from 'react';
import StyledInfo from '../../styled/StyledInfo';
import useStore from '../../hooks/useStore';
import Favorites from './Favorites';
import Share from './Share';


const Info = ({ title, url, meme }) => {

    const { store } = useStore();

    return (
        <StyledInfo>
            <h3>{ title }</h3>
            {store.user ?
                <div>
                    <Favorites meme={meme} />
                    <Share meme={meme} />
                </div>
            : null}
        </StyledInfo>
    )
}

export default Info;