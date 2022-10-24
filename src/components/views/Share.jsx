import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { copyToClipboard } from '../../helpers/copyToClipboard';
import { env, shareFileName } from '../../helpers/enviroment';
import { NotificationContext } from '../../Root';
import UserService from '../../services/UserService';
import Button from '../common/Button';


const Share = () => {

    const params = useParams();
    const [meme, setMeme] = useState(null);
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line

    const fileName = shareFileName();

    const getMeme = async () => {
        const response = await UserService.get(shareFileName());
        setMeme(response.data[params.shareItem]);
    }

    const share = () => {
        try{
            copyToClipboard(
                `${window.location.origin}/${env.isLocal ? '' : 'fun/'}shared/${fileName}/${params.shareItem}`
            )
            setNotification({ type: 'success', message: 'Share link copied to clipboard!'});
        } catch(e) {
            setNotification({ type: 'error', message: 'Uops, something went wrong!'});
        }
    }
    
    useEffect(() => {
        getMeme();
    }, []); // eslint-disable-line

    return(
        <StyledShareModal>
            <h2>Share</h2>
            {meme ? <div>
                <div className="placeholder">
                    <img src={meme.url} alt={meme.title} />
                </div>
                <p>{ meme.title }</p>
                <Button label="share 🚀" onClick={() => share()} />
            </div> : null }
        </StyledShareModal>  
    )
}

const StyledShareModal = styled.div`
    img{
        max-width: 100%;
        max-height: 100%;
        display: flex;
        justify-content: center;
        margin: auto;
    }
    button{
        margin-top: 20px;
    }
    .placeholder{
        height: 300px;
    }
`

export default Share;