import styled from 'styled-components';

const StyledInfo = styled.footer`
    position: absolute;
    left: 0;
    bottom: 0px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 40%);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    h3{
        margin: 10px 45px 15px 10px;
    }

    div{
        margin-right: 45px;
        display: flex;
        flex-wrap: nowrap;
        svg{
            margin: 10px;
            width: 30px;
            height: 30px;
        }
    }
`

export default StyledInfo;