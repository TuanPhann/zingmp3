import styles from './StyleFavorite.module.scss';
import classNames from 'classnames/bind';
import ListFavorite from '~/components/Individual/ListFavorite';

const cx = classNames.bind(styles);

function Favorite() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('title')}>
                <h5>BÀI HÁT</h5>
                <h5>ALBUM</h5>
                <h5>THỞI GIAN</h5>
            </div>
            <div className={cx('List')}>
                <ListFavorite individual />
            </div>
        </div>
    );
}

export default Favorite;
