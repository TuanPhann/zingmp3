import styles from './StyleNewMusic.module.scss';
import classNames from 'classnames/bind';
import { PlayFillIndividualIcon } from '~/components/Icons';
import ListFavorite from '~/components/Individual/ListFavorite';

const cx = classNames.bind(styles);

function NewMusic() {
    return (
        <div className={cx('container')}>
            <div className={cx('blur')}></div>
            <div className={cx('alpha')}></div>
            <div className={cx('alpha-1')}></div>
            <div className={cx('wrap')}>
                <h2>Thư viện</h2>
                <button>
                    <PlayFillIndividualIcon />
                </button>
            </div>
            <div className={cx('menu-music')}>
                <ListFavorite newMusic />
            </div>
        </div>
    );
}

export default NewMusic;
