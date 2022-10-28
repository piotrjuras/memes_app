import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import { NotificationContext } from '../../Root';
import { shareFileName } from '../../helpers/enviroment';


const Share = ({ meme }) => {

    const navigate = useNavigate();
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line


    const copy = async () => {
        setNotification({ type: 'warning', message: `generating share link...`});

        const shared = (await UserService.get(shareFileName())).data || [];

        if(!shared){
            shared.push(meme);
            const res = await UserService.create(shareFileName(), shared);

            if(res.data === 'created'){
                setNotification({ type: 'success', message: `generated!`});
            } else {
                setNotification({ type: 'error', message: `Uops! something went wrong`});
            }
        }

        if(typeof shared === 'object'){
            shared.push(meme);
            const res = await UserService.create(shareFileName(), shared);

            if(res.data === 'created'){
                setNotification({ type: 'success', message: `generated!`});
            } else {
                setNotification({ type: 'error', message: `Uops! something went wrong`});
            }
        }

        navigate(`/share/${shared.length - 1}`);
    }


    return (
        <FontAwesomeIcon icon={faShare} className="pointer" onClick={() => copy()} />
    )
}

export default Share;