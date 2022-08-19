import styles from './StyleSinger.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Singer({ info }) {
    return (
        <div className={cx('image')}>
            <img src={info.img} alt={info.name} />
        </div>
    );
}

export default Singer;
