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
    { path: '/', component: Individual },
    { path: '/discover', component: Discover },
    { path: '/zingChart', component: ZingChart },
    { path: '/radioLive', component: RadioLive },
    { path: '/following', component: Following },
    { path: '/newMusic', component: NewMusic },
    { path: '/category', component: Category },
    { path: '/topMusic', component: TopMusic },
    { path: '/mv', component: Mv },
    { path: '/music', component: Music },
    { path: '/playlist', component: Playlist },
    { path: '/recently', component: Recently },
];

export { publicRoute };
