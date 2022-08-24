import styles from './StyleListFavorite.module.scss';
import classNames from 'classnames/bind';
import SongFavorite from '~/components/Individual/SongFavorite';
import { DataFavorite } from '~/assets/DataFavorite/Favorite';
const cx = classNames.bind(styles);

function ListFavorite() {
    return (
        <div className={cx('wrap')}>
            {DataFavorite.map((info) => {
                return <SongFavorite key={info.id} info={info} />;
            })}
        </div>
    );
}

export default ListFavorite;
