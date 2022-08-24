import styles from './StyleNewPodCast.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NewPodCast() {
    return (
        <div className={cx('wrap')}>
            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/episode-empty-1.png" alt="logo" />
            <p>Không Có Tập Mới</p>
        </div>
    );
}

export default NewPodCast;
