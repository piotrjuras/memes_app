import React, { useEffect, useState } from 'react';
import ContentService from '../../services/ContentService';
import MemeView from '../meme/MemeView';
import useStore from '../../hooks/useStore';
import Helmet from 'react-helmet';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const ContentView = ({ favorites }) => {
    const { store, updateStore } = useStore();
    const [memesList, setMemesList] = useState([...store.memes]);
    const [swiper, setSwiper] = useState();
    const navigate = useNavigate();
    const { login } = useLogin();

    const fetchContent = async () => {
        const { memes } = await ContentService.fetchContent('gifs', 5);
        setMemesList([...memesList, ...memes]);
        if (!store.user && memesList.length > 5) navigate('/ad/register')
    }

    useEffect(() => {
        if(store.user && favorites){
            setMemesList([...store.user.favorites, ...memesList]);
            swiper.activeIndex = 0;
        }
    }, [favorites]) // eslint-disable-line

    useEffect(() => {
        if(memesList.length === 0) fetchContent();
        if(localStorage.getItem('userlogged') && !window.location.pathname.includes('shared')) login(localStorage.getItem('userlogged'));
    },[]) // eslint-disable-line

    useEffect(() => {
        updateStore('memes', memesList);
    },[memesList]) // eslint-disable-line

    const slideChanged = async ({ slides, activeIndex }) => {
        navigate('/');
        if(slides.length - activeIndex < 2) fetchContent();
    }

    return ( <>
            <Helmet>
                { swiper?.activeIndex ? <title>{`funapp ${store.memes[swiper.activeIndex].title}`}</title> : <title>funapp</title> }
            </Helmet>
            <Swiper
                direction={"vertical"}
                onSlideChange={(event) => slideChanged(event)}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                    window.addEventListener('keydown', (e) => {
                        if(e.keyCode === 40){
                            swiper.slideNext();
                        } else if(e.keyCode === 38){
                            swiper.slidePrev();
                        }
                    });
                }}
                onClick={() => updateStore('menuOpened', false)}
            >
                {memesList.map((meme, index) =>
                    <SwiperSlide key={index}>
                        <MemeView meme={ meme } />
                    </SwiperSlide>
                )}
            </Swiper>
    </> )
}

export default ContentView;