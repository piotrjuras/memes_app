import React, { useEffect, useState } from 'react';
import ContentService from '../../services/ContentService';
import MemeView from '../meme/MemeView';
import useStore from '../../hooks/useStore';
import Helmet from 'react-helmet';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import Navigation from '../meme/Navigation';

import 'swiper/css';

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
                onSwiper={(swiper) => setSwiper(swiper)}
                onClick={() => updateStore('menuOpened', false)}
            >
                {memesList.map((meme, index) =>
                    <SwiperSlide key={index}>
                        <MemeView meme={ meme } />
                    </SwiperSlide>
                )}
            </Swiper>
            {swiper && store.navigationVisible ? <Navigation
                            nextSlide={() => swiper.slideNext()}
                            prevSlide={() => swiper.slidePrev()}
                        />
            : null}
    </> )
}

export default ContentView;