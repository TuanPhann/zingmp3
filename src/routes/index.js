import Playlist from '~/Pages/Playlist';
import Following from '~/Pages/Following';
import Discover from '~/Pages/Discover';

const publicRoute = [
    { path: '/', component: Discover },
    { path: '/playlist', component: Playlist },
    { path: '/following', component: Following },
];

export { publicRoute };
