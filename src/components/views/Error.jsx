import React from 'react';
import { useParams } from 'react-router-dom';
import useScreenHeight from '../../hooks/useScreenHeight';
import StyledMainView from '../../styled/StyledMainView';


const Error = ({ pageNotFound }) => {

    const params = useParams();
    const { vh } = useScreenHeight();

    return(
        <StyledMainView style={{ height: `${vh}px` }} >
            { !pageNotFound ? 
                <h1>Sorry, there was an sad error: {params.errorCode}</h1>
            :
                <h1>Looks like you're kinda lost, go to main page</h1>
            }
        </StyledMainView>
    )
}

export default Error;