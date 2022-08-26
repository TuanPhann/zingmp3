import RecentlySong from '../../Pages/ Recently/RecentlySong';
import RecentlyPlaylist from '../../Pages/ Recently/RecentlyPlaylist';
import RecentlyMv from '../../Pages/ Recently/RecentlyMv';
import RecentlyRadio from '../../Pages/ Recently/RecentlyRadio';
import RecentlyPodcast from '../../Pages/ Recently/RecentlyPodcast';

export const publicRouteRecentlyChildrent = [
    { path: '/song', component: RecentlySong },
    { path: '/', component: RecentlyPlaylist },
    { path: '/mv', component: RecentlyMv },
    { path: '/radio', component: RecentlyRadio },
    { path: '/podcast', component: RecentlyPodcast },
];
