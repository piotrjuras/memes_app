import React from 'react';
import styled from 'styled-components';


const Input = ({ name, label, placeholder, error, refName, type='text' }) => {

    return (
        <StyledInput className="input-wrapper">
            <label htmlFor={name}>{ label }</label>
            <input name={name} placeholder={placeholder} ref={refName} type={type} />
            { error ? <p>{ error }</p> : null }
        </StyledInput>
    )
}

const StyledInput = styled.div`

    &.input-wrapper{
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        font-family: Trispace-light;
    }

    p{
        margin: 0;
        font-size: .7rem;
        color: red;
    }

    input{
        background: inherit;
        outline: none;
        border: 2px solid var(--white);
        padding: 5px 10px;
        color: var(--white);
        font-family: Trispace-light;
        font-size: 1rem;
        margin: 5px 0;
    }
`

export default Input;