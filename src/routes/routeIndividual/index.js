import SongIndividual from '../../Pages/ Individual/SongIndividual';
import PodCast from '../../Pages/ Individual/PodCast';
import Album from '../../Pages/ Individual/Album';
import MvInvidual from '../../Pages/ Individual/Mv';
import Favorite from '~/Pages/ Individual/SongIndividual/Favorite';
import UpLoadSong from '~/Pages/ Individual/SongIndividual/Upload';

export const publicRouteIndividual = [
    { path: '/*', component: SongIndividual },
    { path: '/podcast', component: PodCast },
    { path: '/album', component: Album },
    { path: '/mv', component: MvInvidual },
];

export const publicRouteIndividualChildrent = [
    { path: '/', component: Favorite },
    { path: '/uploadSong', component: UpLoadSong },
];

// info favorite nav link

export const FavoriteNavLink = [
    { path: '/', component: Favorite },
    { path: '/uploadSong', component: UpLoadSong },
];

export const DataFavoriteNavLink = [
    { path: '/individual', lable: 'YÊU THÍCH' },
    { path: '/individual/uploadSong', lable: 'ĐÃ TẢI LÊN' },
];
