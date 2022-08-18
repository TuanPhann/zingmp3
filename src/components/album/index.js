import styles from './StyleAlbum.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function InfoAlbum({ info }) {
    return (
        <div className={cx('wraper')}>
            <div className={cx('image')}>
                <img src={info.img} alt={info.name} />
            </div>
            <h4>{info.name}</h4>
            <p>{info.singer}</p>
        </div>
    );
}

export default InfoAlbum;
