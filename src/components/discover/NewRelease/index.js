import styles from './StyleNewRelease.module.scss';
import classNames from 'classnames/bind';
import NewSong from '../../SongNew';
import { InfoNewRealease } from '~/assets/Musics';

const cx = classNames.bind(styles);

function NewRelease() {
    return (
        <div className={cx('wrap')}>
            {InfoNewRealease.map((info) => {
                return <NewSong key={info.id} info={info} />;
            })}
        </div>
    );
}

export default NewRelease;
