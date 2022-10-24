import React, { createContext, useState } from 'react';

import AppRouter from './components/core/AppRouter';
import AppWrapper from './components/core/AppWrapper';
import storeValue from './store';

import Notification from './components/core/Notification';

export const StoreContext = createContext();
export const NotificationContext = createContext();
export const ModalContext = createContext();

const Root = () => {

    const [store, setStore] = useState(storeValue);
    const [notification, setNotification] = useState(null);
    const [modal, setModal] = useState(null);

    return(
        <StoreContext.Provider value={[store, setStore]}>
            <NotificationContext.Provider value={[notification, setNotification]}>
                <ModalContext.Provider value={{modal, setModal}}>
                    { notification ? <Notification type={notification.type} message={notification.message} /> : null }
                    <AppWrapper>
                        <AppRouter />
                    </AppWrapper>
                </ModalContext.Provider>
            </NotificationContext.Provider>
        </StoreContext.Provider>
    )
}

export default Root;