import styles from './StyleIntroducSong.module.scss';
import classNames from 'classnames/bind';
import InfoAlbum from '~/components/album';
import { InfoIntroducSong } from '~/assets/Musics';

const cx = classNames.bind(styles);

function IntroducSong() {
    return (
        <div className={cx('wrap')}>
            {InfoIntroducSong.map((info) => {
                return <InfoAlbum key={info.id} info={info} />;
            })}
        </div>
    );
}

export default IntroducSong;
