import styles from './StyleMenuSong.module.scss';
import classNames from 'classnames/bind';
import Song from '../song';
import { useContext } from 'react';
import { Songs } from '~/Context';

const cx = classNames.bind(styles);

function MenuSong() {
    const DataSongs = useContext(Songs);

    return (
        <div className={cx('ListSong')}>
            {DataSongs.map((song) => {
                return <Song key={song.id} songs={song} />;
            })}
        </div>
    );
}

export default MenuSong;
