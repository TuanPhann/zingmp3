import styles from './StyleMvVietNam.module.scss';
import classNames from 'classnames/bind';
import MvMusic from '~/components/MvMusic';
import { InfoSongMV } from '~/assets/DataMV';

const cx = classNames.bind(styles);

function MvVietNam() {
    return (
        <div className={cx('wrap')}>
            {InfoSongMV.map((info) => {
                return <MvMusic key={info.id} info={info} />;
            })}
        </div>
    );
}

export default MvVietNam;
