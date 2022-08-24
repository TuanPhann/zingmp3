import styles from './styleAlbum.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Album() {
    return (
        <div className={cx('wrap')}>
            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-mv-dark.png" alt="logo" />
            <p>Chưa Có Album Trong Thư Viện Cá Nhân</p>
        </div>
    );
}

export default Album;
