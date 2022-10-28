import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ nextSlide, prevSlide }) => {

    const keyDownAction = (e) => {
        if(e.keyCode === 40){
            nextSlide();
        } else if(e.keyCode === 38){
            prevSlide();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => keyDownAction(e));

        return () => window.removeEventListener('keydown', keyDownAction)
    },[]) // eslint-disable-line

    return(
        <StyledNavigation>
            <FontAwesomeIcon icon={faArrowUp} onClick={() => prevSlide()} />
            <FontAwesomeIcon icon={faArrowDown} onClick={() => nextSlide()} />
        </StyledNavigation>
    )
}

const StyledNavigation = styled.div`
    position: fixed;
    right: 10px;
    bottom: 70px;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, .3);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
    z-index: 1;
    svg{
        margin: 10px 5px;
        padding: 10px 11.5px;
    }


`

export default Navigation;