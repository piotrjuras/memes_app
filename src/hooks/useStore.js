import { useContext } from 'react';
import { StoreContext } from '../Root';

const useStore = () => {

    const [store, setStore] = useContext(StoreContext);

    const updateStore = (property, value) => {
        const newStore = JSON.parse(JSON.stringify(store));
        newStore[property] = value;
        setStore(newStore);
    }

    return { store, updateStore };
}

export default useStore;