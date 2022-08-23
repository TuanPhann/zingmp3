import styles from './styleHoaTau.module.scss';
import classNames from 'classnames/bind';
import { MusicNoteIcon, ArrowDownIcon, MenuAlt2Icon } from '~/components/Icons';
import ButtonMv from '~/components/ButtonMv';
import { CategoryLIstHoaTau } from '~/assets/DataMV/HoaTau';
import ListMv from '~/components/ListMV';

const cx = classNames.bind(styles);

function HoaTau() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('choose-btn')}>
                <ButtonMv list dataHoaTau={CategoryLIstHoaTau}>
                    <>
                        <MusicNoteIcon />
                        Tất Cả
                        <ArrowDownIcon />
                    </>
                </ButtonMv>
                <ButtonMv>
                    <MenuAlt2Icon />
                    Nghe Nhiều
                    <ArrowDownIcon />
                </ButtonMv>
            </div>
            <ListMv MvHoaTau />
        </div>
    );
}

export default HoaTau;
