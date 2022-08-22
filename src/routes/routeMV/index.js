import MvVietNam from '~/Pages/Mv/VietNam';
import UsUk from '~/Pages/Mv/US-UK';
import Kpop from '~/Pages/Mv/Kpop';
import HoaTau from '~/Pages/Mv/HoaTau';

export const publicRouteMV = [
    { path: '/', component: MvVietNam },
    { path: '/usuk', component: UsUk },
    { path: '/kpop', component: Kpop },
    { path: '/hoatau', component: HoaTau },
];
