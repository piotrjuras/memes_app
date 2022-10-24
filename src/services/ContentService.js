import axios from 'axios';


export default class ContentService{

    static async fetchContent(sub, count){

        try{
            const response = await axios.get(`https://meme-api.herokuapp.com/gimme/${count}`)

            return response.data;
        }
        catch(error){
            console.log(error);
        }

    }
}