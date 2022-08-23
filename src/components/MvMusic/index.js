import styles from './StyleMvMusic.module.scss';
import classNames from 'classnames/bind';
import { PlayCircleOutlineMV } from '~/components/Icons';

const cx = classNames.bind(styles);

function MvMusic({ info }) {
    return (
        <div className={cx('wraper')}>
            <div className={cx('image')}>
                <img src={info.img} alt={info.name} />
                <div className={cx('time')}>{info.time}</div>
                <div className={cx('icon-hover')}>
                    <PlayCircleOutlineMV />
                </div>
            </div>
            <div className={cx('info-song')}>
                <div className={cx('avatar-singer')}>
                    <img src={info.avatar} alt={info.singer} />
                </div>
                <div className={cx('song')}>
                    <h3>{info.name}</h3>
                    <p>{info.singer}</p>
                </div>
            </div>
        </div>
    );
}

export default MvMusic;
