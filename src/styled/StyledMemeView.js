import styled from 'styled-components';

const StyledMemeView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .pacman{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: (-50%, calc(-50% - 60px));
    }

    img{
        width: 100%;
        height: auto;
        transition: opacity .2s;

        &.height-scale{
            width: auto;
            height: 100%;
        }
    }
`


export default StyledMemeView;