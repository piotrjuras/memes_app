import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLogin from '../../hooks/useLogin';
import useScreenHeight from '../../hooks/useScreenHeight';
import useStore from '../../hooks/useStore';
import Button from '../common/Button';
import Hamburger from './Hamburger';


const Menu = () => { 

    const { store, updateStore } = useStore();
    const { vh } = useScreenHeight();
    const { logout } = useLogin();
    const navigate = useNavigate();

    return(
        <>
            <Hamburger />
            <StyledMenu
                style={{ height: `${vh}px` }}
                className={store.menuOpened ? 'opened' : ''}
            >
                {store.user ? <>
                    <h1>{`Hello, ${store.user.username}`}</h1>
                    <div className="content">
                        <h3 onClick={() => {
                            updateStore('menuOpened', false);
                            navigate('/favorites');
                        }}>show me my favorites ❤️</h3>
                        <h3 onClick={() => {
                            updateStore('menuOpened', false);
                            navigate('/auth/login/pin/change');
                        }}>change your pin 🔐</h3>
                    </div>
                    <div className="buttons">
                        <Button label={'logout'} iconName="faArrowRightToBracket" onClick={() => {
                            logout();
                            navigate('/');
                        }} />
                    </div>
                    </> : <>
                    <h1>Hello, expand your possibilities</h1>
                    <div className="content">
                        <h3>Why?</h3>
                        <ul>
                            <li>Option to save favorite content!</li>
                            <li>Option to share content with your frineds!</li>
                            <li>You provide only username, no passwords, no emails!</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <Button label={'sign up'} iconName="faUserPlus" onClick={() => {
                            updateStore('menuOpened', false);
                            navigate('/auth/register');
                        }} />
                        <Button label={'log in'} iconName="faArrowRightToBracket" onClick={() => {
                            updateStore('menuOpened', false);
                            navigate('/auth/login');
                        }} />
                    </div>
                </> }
            </StyledMenu>
        </>
    )
}

const StyledMenu = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    width: 90%;
    height: 100%;
    transform: translateX(100vw);
    transition: transform .3s ease-in-out;
    background: var(--black-background);
    z-index: 2;
    border-left: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflowY: auto;
    padding: 20px;
    box-sizing: border-box;

    &.opened{
        transform: translateX(0);
    }

    .buttons{
        display: flex;
        margin-bottom: 50px;
    }
`

export default Menu