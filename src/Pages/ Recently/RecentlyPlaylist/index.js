import styles from './styleRecentlyPlaylist.module.scss';
import classNames from 'classnames/bind';
import IntroducSong from '~/components/discover/IntroducSong';

const cx = classNames.bind(styles);

function RecentlyPlaylist() {
    return (
        <div className={cx('wrap')}>
            <IntroducSong />
        </div>
    );
}

export default RecentlyPlaylist;
