import React from 'react';
import styled from 'styled-components';

export const Checkbox = ({ name, label, value, checked = true }) => {

    return(
        <StyledCheckbox className="custom-checkbox">
            <input type='checkbox' name={name} checked={checked} onChange={(e) => {
                e.stopPropagation();
                value(e.target.checked);
            }} />
            <label htmlFor={name}>{ label }</label>
        </StyledCheckbox>
    )
}

const StyledCheckbox = styled.div`
&{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
}
input[type="checkbox"] {
    appearance: none;
    margin: 0 10px 0 0;
    width: 30px;
    height: 30px;
    border: 2px solid var(--white);
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
}
  
input[type="checkbox"]::before {
    content: "";
    width: 18px;
    height: 18px;
    background: inherit;
}
  
input[type="checkbox"]:checked::before {
    background: var(--white);
}
  
input[type="checkbox"]:disabled {  
    color: var(--blue);
    cursor: not-allowed;
}
`