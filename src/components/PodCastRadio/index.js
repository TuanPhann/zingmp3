import styles from './StylePodCastRadio.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PodCastRadio({ info }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={info.img} alt={info.title} />
            </div>
            <div className={cx('title')}>
                <p>{info.title}</p>
                <p>{info.title2}</p>
            </div>
        </div>
    );
}

export default PodCastRadio;
