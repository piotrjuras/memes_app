import React from 'react';
import styled from 'styled-components';
import Button from './Button';


const Form = ({ submitHandler, submitLabel, loading, children }) => {

    return(
        <StyledForm>
            <form onSubmit={(event) => submitHandler(event)}>
                { children }
                <Button type="submit" label={submitLabel} center disabled={loading} />
            </form>
        </StyledForm>
    )
}

const StyledForm = styled.div`
    h1, h2, h3, h4{
        margin-left: 10px;
        margin-right: 40px;
    }

    form{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        button[type="submit"]{
            margin-top: auto;
        }
    }
`

export default Form;