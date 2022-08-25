import styles from './StyleAltist.module.scss';
import classNames from 'classnames/bind';
import InfoArtist from '~/components/InfoArtist';
import { ImgArtist, ImgCategory } from '~/assets/Musics';

const cx = classNames.bind(styles);

function Artists({ category, discover }) {
    if (discover) {
        return (
            <div className={cx('wrap')}>
                {ImgArtist.map((info) => {
                    return <InfoArtist discover key={info.id} info={info} />;
                })}
            </div>
        );
    } else if (category) {
        return (
            <div className={cx('wrapper')}>
                {ImgCategory.map((info) => {
                    return <InfoArtist category key={info.id} info={info} />;
                })}
            </div>
        );
    }
}

export default Artists;
