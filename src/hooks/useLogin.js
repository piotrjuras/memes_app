import { useContext } from 'react';
import { NotificationContext } from '../Root';
import UserService from '../services/UserService';
import useStore from '../hooks/useStore';


const useLogin = () => {

    const [notification, setNotification] = useContext(NotificationContext); // eslint-disable-line
    const { updateStore } = useStore();

    const login = async (username) => {
        if(!localStorage.getItem('authenticated')){
            updateStore('user', null);
            localStorage.removeItem('userlogged');
            return false;
        }
        const response = await UserService.get(username);
        if(typeof response.data === 'object'){
            updateStore('user', response.data);
            setNotification({ type: 'success', message: `logged: ${response.data.username}`});
        } else {
            setNotification({ type: 'error', message: `Uops! something went wrong`});
        }
    }

    const logout = () => {
        updateStore('user', null);
        setNotification({ type: 'success', message: `see you later`});
        localStorage.removeItem('userlogged');
        localStorage.removeItem('authenticated');

    }

    return { login, logout };
}

export default useLogin;