import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import UserService from '../../services/UserService';

import ContentView from './ContentView';
import StyledMainView from '../../styled/StyledMainView';
import useScreenHeight from '../../hooks/useScreenHeight';
import { Helmet } from 'react-helmet';
import Button from '../common/Button';

const SharedView = () => {

    const params = useParams();
    const { vh } = useScreenHeight();
    const { store, updateStore } = useStore();
    const navigate = useNavigate();

    const getMeme = async () => {
        const response = await UserService.get(params.file);

        console.log(response.data);

        if(response.data[params.shareItem]){
            updateStore('memes', [response.data[params.shareItem], ...store.memes]);
        } else {
            navigate(`/error/${'invalid link'}`);
        }
    }

    useEffect(() => {
        getMeme();
    }, []) // eslint-disable-line


    if(store.memes[0]) return (
        <>
            <Helmet>
                <title>check this awesome meme! {store.memes[0].title}</title>
            </Helmet>
            <StyledMainView style={{ height: `${vh}px` }}>
                <ContentView />
                <Button label="go to main app" className="additional-button" iconName="faArrowLeft" onClick={() => {
                    updateStore('memes', []);
                    navigate('/');
                }} />
            </StyledMainView>
        </>
    )
}

export default SharedView;