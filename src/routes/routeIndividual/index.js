import SongIndividual from '../../Pages/ Individual/SongIndividual';
import PodCast from '../../Pages/ Individual/PodCast';
import Album from '../../Pages/ Individual/Album';
import MvInvidual from '../../Pages/ Individual/Mv';
import Favorite from '~/Pages/ Individual/SongIndividual/Favorite';
import UpLoadSong from '~/Pages/ Individual/SongIndividual/Upload';
import NewPodCast from '~/Pages/ Individual/PodCast/NewPodCast';
import SavePodCast from '~/Pages/ Individual/PodCast/SavePodCast';
import ShowPodCast from '~/Pages/ Individual/PodCast/ShowPodCast';

export const publicRouteIndividual = [
    { path: '/*', component: SongIndividual },
    { path: '/podcast/*', component: PodCast },
    { path: '/album', component: Album },
    { path: '/mv', component: MvInvidual },
];

export const publicRouteIndividualChildrent = [
    { path: '/', component: Favorite },
    { path: '/uploadSong', component: UpLoadSong },
];

// info favorite nav link

export const DataFavoriteNavLink = [
    { path: '/individual', lable: 'YÊU THÍCH' },
    { path: '/individual/uploadSong', lable: 'ĐÃ TẢI LÊN' },
];

// info podcast navlink

export const DataPodCastNavLink = [
    { path: '/individual/podcast', lable: 'TẬP MỚI' },
    { path: '/individual/podcast/savepodcast', lable: 'TẬP ĐÃ LƯU' },
    { path: '/individual/podcast/showpodcast', lable: 'CHƯƠNG TRÌNH' },
];

export const publicRouteIndividualPodCast = [
    { path: '/', component: NewPodCast },
    { path: '/savepodcast', component: SavePodCast },
    { path: '/showpodcast', component: ShowPodCast },
];
