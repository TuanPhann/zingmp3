import styles from './StyleRanking.module.scss';
import classNames from 'classnames/bind';
import { PlayCircleOutlineNewMusic } from '~/components/Icons';

const cx = classNames.bind(styles);

function Ranking({ info }) {
    return (
        <div className={cx('display')}>
            {info.total ? (
                <div className={cx('wrapper')}>
                    <p className={cx('show-title')}>{info.title}</p>
                </div>
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('image')}>
                        <img src={info.img} alt={info.name} />
                    </div>
                    <div className={cx('info-song')}>
                        <div className={cx('title')}>
                            <h5>{info.name}</h5>
                            <p>{info.singer}</p>
                        </div>
                        <div className={cx('rank')}>
                            <span className={cx('rank-number')}>{info.other}</span>
                            <span className={cx('rank-time')}>{info.time}</span>
                        </div>
                    </div>

                    <button className={cx('btn-play')}>
                        <PlayCircleOutlineNewMusic />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Ranking;
