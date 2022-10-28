import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';


const Button = ({ onClick = () => {}, label, iconName, styles = {}, className = '', center , disabled = false }) => {

    return <StyledButton onClick={(event) => onClick(event)} style={styles} className={className} center disabled={disabled} >
        { iconName ? <FontAwesomeIcon icon={icon[iconName]} /> : null }
            { label }
    </StyledButton>
}

const StyledButton = styled.button`
    outline: none;
    color: var(--white);
    font-size: 1rem;
    border: 2px solid var(--white);
    background: inherit;
    padding: 10px 15px;
    font-family: Trispace-medium;
    margin: 2px;
    cursor: pointer;
    svg{
        margin-right: 8px;
    }

    &[disabled]{
        color: gray;
    }

    ${props => props.center ? `
        display: flex;
        position: relative;
        margin: 2px auto;
    `: null}
`

export default Button;