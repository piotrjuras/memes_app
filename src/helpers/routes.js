import MainView from "../components/views/MainView"
import SharedView from "../components/views/SharedView"
import Error from "../components/views/Error"

const routes = [
    {
        name: 'home',
        path: '/',
        component: <MainView />
    },
    {
        name: 'favorites',
        path: '/favorites',
        component: <MainView favorites />
    },
    {
        name: 'register',
        path: '/auth/register',
        component: <MainView register />
    },
    {
        name: 'login',
        path: '/auth/login',
        component: <MainView login />
    },
    {
        name: 'pin',
        path: '/auth/login/pin',
        component: <MainView pin />
    },
    {
        name: 'pinChange',
        path: '/auth/login/pin/change',
        component: <MainView pinChange />
    },
    {
        name: 'share',
        path: '/share/:shareItem',
        component: <MainView share />
    },
    {
        name: 'shared',
        path: '/shared/:file/:shareItem',
        component: <SharedView />
    },
    {
        name: 'ad',
        path: '/ad/:adType',
        component: <MainView ad />
    },
    {
        name: 'error',
        path: '/error/:errorCode',
        component: <Error />
    },
    {
        name: '404',
        path: '*',
        component: <Error pageNotFound />
    },
]

export default routes