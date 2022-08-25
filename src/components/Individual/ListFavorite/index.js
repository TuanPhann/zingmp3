import styles from './StyleListFavorite.module.scss';
import classNames from 'classnames/bind';
import SongFavorite from '~/components/Individual/SongFavorite';
import { DataFavorite, DataNewMusic } from '~/assets/DataFavorite/Favorite';
const cx = classNames.bind(styles);

function ListFavorite({ newMusic, individual }) {
    if (individual) {
        return (
            <div className={cx('wrap')}>
                {DataFavorite.map((info) => {
                    return <SongFavorite individual key={info.id} info={info} />;
                })}
            </div>
        );
    } else if (newMusic) {
        return (
            <div className={cx('wrap')}>
                {DataNewMusic.map((info) => {
                    return <SongFavorite newMusic key={info.id} info={info} />;
                })}
            </div>
        );
    }
}

export default ListFavorite;
