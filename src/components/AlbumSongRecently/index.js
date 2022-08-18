import styles from './StyleAlbumSongRecently.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AlbumSongRecently({ info }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('image')}>
                <img src={info.img} alt={info.name} />
            </div>
            <h4>#zingchart</h4>
        </div>
    );
}

export default AlbumSongRecently;
