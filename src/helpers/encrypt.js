import * as CryptoJS from 'crypto-js';

export const encrypt = (string) => {
    return CryptoJS.AES.encrypt(string, process.env.REACT_APP_ENCRYPT_KEY);
}

export const decrypt = (encrypted) => {
    return CryptoJS.AES.decrypt(encrypted, process.env.REACT_APP_ENCRYPT_KEY).toString(CryptoJS.enc.Utf8);
}