import styles from './StylePoster.module.scss';
import classNames from 'classnames/bind';
import Poster from '../Poster';
import { Posters } from '~/assets/Musics';

const cx = classNames.bind(styles);

function TotalPoster() {
    return (
        <div className={cx('wrap')}>
            {Posters.map((info) => {
                return <Poster key={info.id} info={info} />;
            })}
        </div>
    );
}

export default TotalPoster;
