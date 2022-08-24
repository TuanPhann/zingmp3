import styles from './styleSavePodCast.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SavePodCast() {
    return (
        <div className={cx('wrap')}>
            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/episode-empty-1.png" alt="logo" />
            <p>Không Có Tập Đã Lưu</p>
        </div>
    );
}

export default SavePodCast;
