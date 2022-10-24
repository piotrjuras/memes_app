import React, { useContext, useRef, useState } from 'react';

import Form from '../common/Form';
import Input from '../common/Input';

import UserService from '../../services/UserService';
import { ModalContext, NotificationContext } from '../../Root';
import useStore from '../../hooks/useStore';

const Register = () => {

    const username = useRef();
    const pin = useRef();
    const [validationError, setValidationError] = useState(null);
    const [pinError, setPinError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line
    const { setModal } = useContext(ModalContext);
    const { updateStore } = useStore();

    const submitted = async (e) => {
        e.preventDefault();
        setLoading(true);
        const newUser = {
            username: username.current.value,
            favorites: [],
            pin: pin.current.value
        }

        if(newUser.pin.length !== 4){
            setPinError('pin must be four digits!');
            setLoading(false);
            return false;
        }

        if(newUser.username.length < 3){
            setValidationError('your username must be min 3-char-long');
            setLoading(false);
            return false;
        } else if (/\s/g.test(newUser.username)) {
            setValidationError('your username must not include white space');
            setLoading(false);
            return false;
        } else {
            const userExists = await UserService.get(newUser.username);
            if(typeof userExists.data === 'object'){
                setValidationError('username already taken!');
                setLoading(false);
                return false
            } else {
                setValidationError(null);
            }
        }

        const response = await UserService.create(newUser.username, newUser);

        if(response.data === 'created'){
            setNotification({ type: 'success', message: 'registered! 🚀'});
            setModal(null);
            updateStore('user', newUser);
        } else {
            setNotification({ type: 'error', message: 'Uops, something went wrong!'});
        }
        setLoading(false);
    }

    return(
        <Form submitLabel="Register 🚀" submitHandler={(e) => submitted(e)} loading={loading}>
            <h2>
                Skyrocket your experience now!
            </h2>
            <p>no email, no problem, spam!</p>
            <Input name="nick" refName={username} label="Your username" error={validationError} />
            <Input name="nick" refName={pin} label="Pin to your account" error={pinError} placeholder="4 digit pin" type="number" />
        </Form>
    )
}

export default Register;