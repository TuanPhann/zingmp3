import styles from './styleRecentlyRadio.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RecentlyRadio() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('content')}>
                <div className={cx('image')}></div>
                <p>Không có Radio Nghe Gần Đây</p>
            </div>
        </div>
    );
}

export default RecentlyRadio;
