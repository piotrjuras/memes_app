import React, { useContext, useRef, useState } from 'react';

import Form from '../common/Form';
import Input from '../common/Input';

import useStore from '../../hooks/useStore';
import { NotificationContext } from '../../Root';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';

const PinChange = () => {

    const oldPinRef = useRef();
    const newPinRef = useRef();

    const { store, updateStore } = useStore();
    const [validationError, setValidationError] = useState({ oldPin: null, newPin: null });
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const submitted = async (e) => {
        e.preventDefault();
        const { user } = store;
        const oldPin = oldPinRef.current.value;
        const newPin = newPinRef.current.value;
        const oldPinError = user.pin !== oldPin ? 'you`ve entered wrong pin' : null;
        const newPinError = newPin.length !== 4 ? 'new pin must be 4-digits long' : null;

        setValidationError({
            oldPin: oldPinError,
            newPin: newPinError
        });

        if(oldPinError || newPinError){
            return;
        } else {
            user.pin = newPin;
            updateStore('user', user);
        }

        setLoading(true);
        const response = await UserService.put(user.username, user);
        if(response.data === 'updated'){
            setNotification({ type: 'success', message: 'changed'});
        } else {
            setNotification({ type: 'error', message: 'Uops! something went wrong'});
        }
        navigate('/');
        setLoading(false);
    }

    return(
        <Form submitLabel="Unlock 🔓" submitHandler={(e) => submitted(e)} loading={loading}>
            <h2>
                Change Pin to your account
            </h2>
            <p>provide old & new pin 🔐</p>
            <Input name="nick" refName={oldPinRef} label="Old Pin" error={validationError.oldPin} />
            <Input name="nick" refName={newPinRef} label="New Pin" error={validationError.newPin} />

        </Form>
    )
}

export default PinChange;