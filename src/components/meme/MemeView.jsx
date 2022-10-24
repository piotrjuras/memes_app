import React, { useRef, useState } from 'react';
import StyledMemeView from '../../styled/StyledMemeView';
import Spinner from 'react-spinkit';
import Info from './Info';

const MemeView = ({ meme }) => {

    const { url, title } = meme;
    const [imgLoaded, setImgLoaded] = useState(false);
    const memeImg = useRef();

    const scaleImage = (event) => {
        const dimensions = event.currentTarget.getBoundingClientRect();
        if(dimensions.height > window.innerHeight){
            event.currentTarget.classList.add('height-scale');
        }
        setImgLoaded(true);
    }

    return(
        <StyledMemeView>
            { !imgLoaded ? <Spinner className="pacman" color="white" name="pacman" /> : null }
            <img
                src={url}
                style={{ opacity: !imgLoaded ? '0' : '1' }}
                ref={memeImg}
                alt={title}
                onLoad={(event) => scaleImage(event)}
            />
            <Info title={title} url={url} meme={meme} />
        </StyledMemeView>
    )
}

export default MemeView;