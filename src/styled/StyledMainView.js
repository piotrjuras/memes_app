import styled from 'styled-components';

const StyledMainView = styled.div`
    background: var(--black-background);
    height: 100vh;
    width: 100vw;
    color: var(--white);

    h1{
        margin: 0;
        padding: 10px;
    }

    .additional-button{
        position: absolute;
        top: 10px;
        left: 10px;
        opacity: .5;
        z-index: 5
    }


`

export default StyledMainView;