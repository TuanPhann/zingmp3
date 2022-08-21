/* eslint-disable jsx-a11y/anchor-has-content */
import styles from './StyleSong.module.scss';
import classNames from 'classnames/bind';
import { HeartIcon, DotsHorizontalIcon, PlayFillIcon } from '~/components/Icons';

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
                    <h3>{songs.name}</h3>
                    <p>{songs.author}</p>
                </div>
                <button className={cx('btn-play')}>
                    <PlayFillIcon />
                </button>
            </div>
            <div className={cx('btn')}>
                <button className={cx('btn-heart')}>
                    <HeartIcon />
                </button>
                <button className={cx('btn-heart')}>
                    <DotsHorizontalIcon />
                </button>
            </div>
        </div>
    );
}

export default Song;
