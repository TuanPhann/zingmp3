/* eslint-disable jsx-a11y/anchor-has-content */
import styles from './StyleSong.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Song({ songs }) {
    return (
        <div className={cx('item-song')}>
            <div className={cx('info-song')}>
                <div className={cx('music')}>
                    <a href={songs.url}></a>
                    <img src={songs.images} alt={songs.name} />
                </div>
                <div className={cx('info')}>
                    <h4>{songs.name}</h4>
                    <p>{songs.author}</p>
                </div>
            </div>
        </div>
    );
}

export default Song;
