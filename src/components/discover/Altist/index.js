import styles from './StyleAltist.module.scss';
import classNames from 'classnames/bind';
import InfoArtist from '~/components/InfoArtist';
import { ImgArtist } from '~/assets/Musics';

const cx = classNames.bind(styles);

function Artists() {
    return (
        <div className={cx('wrap')}>
            {ImgArtist.map((info) => {
                return <InfoArtist key={info.id} info={info} />;
            })}
        </div>
    );
}

export default Artists;
