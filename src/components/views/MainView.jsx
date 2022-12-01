import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useScreenHeight from '../../hooks/useScreenHeight';
import useStore from '../../hooks/useStore';
import { ModalContext } from '../../Root';

import StyledMainView from '../../styled/StyledMainView';
import Modal from '../common/Modal';
import Share from '../views/Share';
import Menu from '../menu/Menu';
import ContentView from './ContentView';
import Login from './Login';
import Register from './Register';
import AdView from './AdView';
import Pin from './Pin';
import PinChange from './PinChange';

const MainView = ({ register, login, pin, pinChange, favorites, share, ad }) => {

    const { vh } = useScreenHeight();
    const { modal, setModal } = useContext(ModalContext);
    const { store } = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(store.user && (register || login)) navigate('/');
        if(register){
            setModal('register')
        }
        if(login){
            setModal('login')
        }
        if(pin){
            setModal('pin')
        }
        if(!register && !login && !pin) setModal(null);
    },[store.user, register, login, pin]) // eslint-disable-line

    return (
        <StyledMainView style={{ height: `${vh}px` }}>
            <Menu />
            <ContentView favorites={favorites} />
            { modal === 'register' ? 
                <Modal onCloseEvent={() => navigate('/')}>
                    <Register />
                </Modal>
            : null }
            { modal === 'login' ? 
                <Modal onCloseEvent={() => navigate('/')}>
                    <Login />
                </Modal>
            : null }
            { modal === 'pin' ? 
                <Modal onCloseEvent={() => navigate('/')} disabledCloseButton>
                    <Pin />
                </Modal>
            : null }
            { pinChange ? 
                <Modal onCloseEvent={() => navigate('/')}>
                    <PinChange />
                </Modal>
            : null }
            { share ? 
                <Modal onCloseEvent={() => navigate('/')}>
                    <Share />
                </Modal>
            : null }
            { ad ? 
                <Modal onCloseEvent={() => navigate('/')}>
                    <AdView />
                </Modal>
            : null }
        </StyledMainView>
    )
}


export default MainView;