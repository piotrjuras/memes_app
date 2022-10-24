import React, { useContext, useEffect, useRef, useState } from 'react';

import Form from '../common/Form';
import Input from '../common/Input';

import useStore from '../../hooks/useStore';
import { NotificationContext } from '../../Root';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';

const Pin = ({ change }) => {

    const pin = useRef();
    const { store, updateStore } = useStore();
    const [validationError, setValidationError] = useState(null);
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        if(store.user) {
            setUser(store.user);
            updateStore('user', null);
        }
        else navigate('/');
    },[]) // eslint-disable-line

    const submitted = async (e) => {
        e.preventDefault();
        if(change){
            user.pin = pin.current.value;
            const response = await UserService.put(user.username, user);
            if(response.data === 'updated'){
                setNotification({ type: 'success', message: 'changed'});
            } else {
                setNotification({ type: 'error', message: 'Uops! something went wrong'});

            }
          
        }
        if(user.pin === pin.current.value){
            window.localStorage.setItem('authenticated', true);
            updateStore('user', user);
            navigate('/');
        } else {
            setValidationError('wrong pin!');
        }
    }

    return(
        <Form submitLabel="Unlock 🔓" submitHandler={(e) => submitted(e)}>
            <h2>
                {change ? 'Change your pin' : 'Provide Pin to your account'}
            </h2>
            <p>just an extra security 🔐 layer</p>
            <Input name="nick" refName={pin} label={change ? 'Change' : 'Unlock your account'} error={validationError} />
        </Form>
    )
}

export default Pin;