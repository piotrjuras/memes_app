import axios from 'axios';
import { env } from '../helpers/enviroment';
import { encrypt, decrypt } from '../helpers/encrypt';
import { headers } from '../helpers/axiosconfig';

export default class UserService{

    static async get(username){
        try{
            const res = await axios.get(`${env.getEndpoint}/${username}.json?ts=${Math.random()}`, headers);
            res.data = JSON.parse(decrypt(res.data));
            return res;
        }
        catch(error){
            return 'Nie ma takiego użytkownika';
        }
    }

    static async put(username, data){
        const form = new FormData();
        form.append('data', encrypt(JSON.stringify(data)));
        form.append('username', username);
        form.append('isLocal', env.isLocal);

        try{
            const res = await axios.post(env.postEndpoint, form, {'Authorization': `${process.env.REACT_APP_API_USERNAME} ${process.env.REACT_APP_API_PASSWORD}`});
            return res;
        }
        catch(error){
            return error.response;
        }
    }

    static async create(username, data){
        const form = new FormData();
        form.append('data', encrypt(JSON.stringify(data)));
        form.append('username', username);
        form.append('isLocal', env.isLocal);
        form.append('create', true);

        try{
            const res = await axios.post(env.postEndpoint, form);
            return res;
        }
        catch(error){
            return error.response;
        }
    }


}