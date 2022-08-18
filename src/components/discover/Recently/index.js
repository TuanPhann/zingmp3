import styles from './StyleRecently.module.scss';
import classNames from 'classnames/bind';
import AlbumSongRecently from '~/components/AlbumSongRecently';
import { InfoAlumRecently } from '~/assets/images';

const cx = classNames.bind(styles);

function RecentlyMusic() {
    return (
        <div>
            {InfoAlumRecently.map((info) => {
                return <AlbumSongRecently key={info.id} info={info} />;
            })}
        </div>
    );
}

export default RecentlyMusic;
