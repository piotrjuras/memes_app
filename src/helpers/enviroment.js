const enviroment = () => {
    const local = process.env.NODE_ENV === 'development';
    if(local){
        return {
            getEndpoint: '/api/users',
            postEndpoint: 'http://192.168.1.102:8000/api/',
            routerBasename: '',
            isLocal: true,
        }
    } else {
        return {
            getEndpoint: '/fun/api/users',
            postEndpoint: 'http://piotr.juras.pl/fun/api/',
            routerBasename: '/fun',
            isLocal: false,
        }
    }
};

export const env = {
        getEndpoint: enviroment().getEndpoint,
        postEndpoint: enviroment().postEndpoint,
        routerBasename: enviroment().routerBasename,
        isLocal: enviroment().isLocal
}

export const shareFileName = () => {
    const date = new Date().setHours(0, 0, 0, 0);

    return String(date);
}