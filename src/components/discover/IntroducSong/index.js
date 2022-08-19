import styles from './StyleIntroducSong.module.scss';
import classNames from 'classnames/bind';
import InfoAlbum from '~/components/album';
import { InfoIntroducSong, InfoAlbumMV, InfoMusicEveryDay } from '~/assets/Musics';

const cx = classNames.bind(styles);

function IntroducSong({ singer, musicEveryDay }) {
    let Info = InfoIntroducSong;

    if (singer) {
        Info = InfoAlbumMV;
    } else if (musicEveryDay) {
        Info = InfoMusicEveryDay;
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
