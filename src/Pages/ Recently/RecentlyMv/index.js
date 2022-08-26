import styles from './styleRecentlyMv.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RecentlyMv() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('content')}>
                <div className={cx('image')}></div>
                <p>Không có Mv Nghe Gần Đây</p>
            </div>
        </div>
    );
}

export default RecentlyMv;
