import ZingChart from '~/Pages/ZingChart';
import Following from '~/Pages/Following';
import Discover from '~/Pages/Discover';
import Individual from '~/Pages/ Individual';
import RadioLive from '~/Pages/RadioLive';
import NewMusic from '~/Pages/NewMusic';
import Category from '~/Pages/ Category';
import TopMusic from '~/Pages/TopMusic';
import Mv from '~/Pages/Mv';
import Music from '~/Pages/Music';
import Playlist from '~/Pages/Playlist';
import Recently from '~/Pages/ Recently';

const publicRoute = [
    { path: '/individual/*', component: Individual },
    { path: '/', component: Discover },
    { path: '/zingChart', component: ZingChart },
    { path: '/radioLive', component: RadioLive },
    { path: '/following', component: Following },
    { path: '/newMusic', component: NewMusic },
    { path: '/category', component: Category },
    { path: '/topMusic', component: TopMusic },
    { path: '/mv/*', component: Mv },
    { path: '/individual/music', component: Music },
    { path: '/individual/playlist', component: Playlist },
    { path: '/individual/recently', component: Recently },
];

export { publicRoute };
