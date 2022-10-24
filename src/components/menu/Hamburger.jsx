import React from 'react';
import styled from 'styled-components';
import useStore from '../../hooks/useStore';


const Hamburger = () => {

    const { store, updateStore } = useStore();

    return (
        <StyledHamburger className={store.menuOpened ? 'open' : ''} onClick={(e) => updateStore('menuOpened', !store.menuOpened)}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
        </StyledHamburger>
    )
}

const StyledHamburger = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 20px;
    right: 20px;
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 330ms ease-out;
  
    &.open {
        transform: rotate(-45deg);  
    }
  
    & .line-menu {
        background-color: #fff;
        border-radius: 5px;
        width: 100%;
        height: 3px;
    }
  
    & .line-menu.half {
        width: 50%;
    }
  
    & .line-menu.start {
        transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
        transform-origin: right;
    }
  
    &.open .line-menu.start {
        transform: rotate(-90deg) translateX(3px);
    }
  
    & .line-menu.end {
        align-self: flex-end;
        transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
        transform-origin: left;
    }
  
    &.open .line-menu.end {
        transform: rotate(-90deg) translateX(-3px);
    }
`

export default Hamburger;