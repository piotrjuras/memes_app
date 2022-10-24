import React, { useContext, useRef, useState } from 'react';

import Form from '../common/Form';
import Input from '../common/Input';

import UserService from '../../services/UserService';
import useStore from '../../hooks/useStore';
import { NotificationContext } from '../../Root';
import { Checkbox } from '../common/Checkbox';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const username = useRef();
    const { updateStore } = useStore();
    const [validationError, setValidationError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line
    const navigate = useNavigate();

    const submitted = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await UserService.get(username.current.value);
        if(typeof response.data === 'object'){
            updateStore('user', response.data);
            setLoading(false);
            navigate('/auth/login/pin');
            setNotification({ type: 'success', message: `logged: ${response.data.username}`});
            if(rememberMe) localStorage.setItem('userlogged', username.current.value);

        } else {
            setValidationError('user does not exist');
            setLoading(false);
        }
    }

    return(
        <Form submitLabel="Log in 🚀" submitHandler={(e) => submitted(e)} loading={loading}>
            <h2>
                Glad to see you again
            </h2>
            <p>only username... and maybe pin later 😇</p>
            <Input name="nick" refName={username} label="Your username" error={validationError} />
            <Checkbox name="saveLogin" label="Remember Me!" checked={rememberMe} value={(checked) => setRememberMe(checked)} />
        </Form>
    )
}

export default Login;