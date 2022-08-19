import styles from './StyleSongByday.module.scss';
import classNames from 'classnames/bind';
import { InfoDayBySong } from '~/assets/Musics';
import InfoAlbum from '~/components/album';

const cx = classNames.bind(styles);

function SongByDay() {
    return (
        <div className={cx('wrap')}>
            {InfoDayBySong.map((info) => {
                return <InfoAlbum key={info.id} info={info} />;
            })}
        </div>
    );
}

export default SongByDay;
