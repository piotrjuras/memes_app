import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './root.css';

// import axios from 'axios';

// axios.defaults.auth = {
//     username: process.env.REACT_APP_API_USERNAME,
//     password: process.env.REACT_APP_API_PASSWORD
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Root /> );