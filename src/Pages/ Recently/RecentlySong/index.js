import styles from './styleRecentlySong.module.scss';
import classNames from 'classnames/bind';
import ListFavorite from '~/components/Individual/ListFavorite';

const cx = classNames.bind(styles);

function RecentlySong() {
    return (
        <div className={cx('wrap')}>
            <ListFavorite individual />
        </div>
    );
}

export default RecentlySong;
