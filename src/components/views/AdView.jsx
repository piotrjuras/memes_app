import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../common/Button';


const AdView = () => {

    const params = useParams();
    const navigate = useNavigate();

    if(params.adType === 'register') return(
        <div>
            <h2>Why don't you register?</h2>
            <ul>
                <li>Option to save favorite content!</li>
                <li>Option to share content with your frineds!</li>
                <li>You provide only username, no passwords, no emails!</li>
            </ul>
            <Button label="register now! 🚀" onClick={() => navigate('/auth/register')}/>
        </div>
    )
}

export default AdView;