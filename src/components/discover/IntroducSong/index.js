import styles from './StyleIntroducSong.module.scss';
import classNames from 'classnames/bind';
import InfoAlbum from '~/components/album';
import {
    InfoIntroducSong,
    InfoAlbumMV,
    InfoMusicEveryDay,
    InfoTopMusic,
    InfoTopMusicUsUK,
    InfoTopMusicHoaTau,
} from '~/assets/Musics';

const cx = classNames.bind(styles);

function IntroducSong({ singer, musicEveryDay, topmusic, musicUsUk, musicHoaTau }) {
    let Info = InfoIntroducSong;

    if (singer) {
        Info = InfoAlbumMV;
    } else if (musicEveryDay) {
        Info = InfoMusicEveryDay;
    } else if (topmusic) {
        Info = InfoTopMusic;
    } else if (musicUsUk) {
        Info = InfoTopMusicUsUK;
    } else if (musicHoaTau) {
        Info = InfoTopMusicHoaTau;
    }

    return (
        <div className={cx('wrap')}>
            {Info.map((info) => {
                return <InfoAlbum key={info.id} info={info} />;
            })}
        </div>
    );
}

export default IntroducSong;
