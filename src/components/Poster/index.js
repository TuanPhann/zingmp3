import styles from './StylePoster.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Poster({ info }) {
    return (
        <div className={cx('image')}>
            <img src={info.img} alt={info.name} />
        </div>
    );
}

export default Poster;
