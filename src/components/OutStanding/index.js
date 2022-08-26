import styles from './StyleOutStanding.module.scss';
import classNames from 'classnames/bind';
import { BookmarkIcon, DotsHorizontalRadioIcon, PlayFillRadioIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function OutStanding({ info }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={info.img} alt={info.name} />
                <button className={cx('btn-play')}>
                    <PlayFillRadioIcon />
                </button>
            </div>
            <div className={cx('info-xone')}>
                <h4>{info.title}</h4>
                <p>{info.name}</p>
                <div className={cx('time-xone')}>
                    <div className={cx('time')}>
                        <span>{info.timeDay}</span>
                        <span>{info.time}</span>
                    </div>
                    <div className={cx('icon-xone')}>
                        <button>
                            <BookmarkIcon />
                        </button>
                        <button>
                            <DotsHorizontalRadioIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutStanding;
