import AllPlayList from '~/Pages/Playlist/AllPlayList';
import MyPlayList from '~/Pages/Playlist/MyPlayList';

export const publicRoutePlayListChildrent = [
    { path: '/', component: AllPlayList },
    { path: '/owner', component: MyPlayList },
];
