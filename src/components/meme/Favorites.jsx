import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import useStore from '../../hooks/useStore';
import UserService from '../../services/UserService';
import { NotificationContext } from '../../Root';

const Favorites = ({ meme }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const { store, updateStore } = useStore();
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line


    const updateFavorites = () => {
        const isFavorite = store.user.favorites.find(fav => fav.url === meme.url);
        setIsFavorite(false);
        if(isFavorite) setIsFavorite(true);
    }
    
    const addToFavorites = async (meme) => {
        const favorites = [...store.user.favorites];
        favorites.push(meme);

        store.user.favorites = favorites;
        updateStore('user', store.user);

        const response = await UserService.put(store.user.username, store.user);
        if(response.data === 'updated'){
            setNotification({ type: 'success', message: 'saved'});
        } else {
            setNotification({ type: 'error', message: 'Uops, something went wrong!'});
        }
        updateFavorites();
    }

    const removefromFavorites = async (meme) => {
        let index = -1;
        store.user.favorites.forEach((fav, favIndex) => {
            if(fav.url === meme.url) index = favIndex;
        });

        if(index !== -1){
            store.user.favorites.splice(index, 1);
            updateStore('user', store.user);
        }

        const response = await UserService.put(store.user.username, store.user);
        if(response.data === 'updated'){
            setNotification({ type: 'success', message: 'removed'});
        } else {
            setNotification({ type: 'error', message: 'Uops, something went wrong!'});
        }
        updateFavorites();
    }

    useEffect(() => {
        if(store.user) updateFavorites();
    },[store.user]) // eslint-disable-line

    return(
         !isFavorite ? 
            <FontAwesomeIcon icon={emptyHeart} className="favorite" onClick={() => addToFavorites(meme)} />
        :
            <FontAwesomeIcon icon={solidHeart} className="favorite" onClick={() => removefromFavorites(meme)} />
    )
}

export default Favorites;