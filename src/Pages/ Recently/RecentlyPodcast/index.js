import styles from './styleRecentlyPodcast.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RecentlyPodcast() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('content')}>
                <div className={cx('image')}></div>
                <p>Không có Radio Nghe Gần Đây</p>
            </div>
        </div>
    );
}

export default RecentlyPodcast;
