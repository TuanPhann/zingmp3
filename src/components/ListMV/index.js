import styles from './StyleListMV.module.scss';
import classNames from 'classnames/bind';

import MvMusic from '~/components/MvMusic';
import { InfoSongMV, InfoSongUsUk, InfoSongkpop, InfoSongHoaTau } from '~/assets/DataMV';

const cx = classNames.bind(styles);

function ListMV({ MvUsUk, MvKpop, MvHoaTau }) {
    let Layout = InfoSongMV;

    if (MvUsUk) {
        Layout = InfoSongUsUk;
    } else if (MvKpop) {
        Layout = InfoSongkpop;
    } else if (MvHoaTau) {
        Layout = InfoSongHoaTau;
    }

    return (
        <div className={cx('total')}>
            {Layout.map((info) => {
                return <MvMusic key={info.id} info={info} />;
            })}
        </div>
    );
}

export default ListMV;
