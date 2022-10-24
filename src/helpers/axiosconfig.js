// import axios from 'axios';
// import { env } from './enviroment';

const headers = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
}



// const init = () => {
//     if(!env.isLocal)
//     {
//         axios.defaults.auth = {
//             username: process.env.REACT_APP_API_USERNAME,
//             password: process.env.REACT_APP_API_PASSWORD
//         }
//     }
// }

export { headers };