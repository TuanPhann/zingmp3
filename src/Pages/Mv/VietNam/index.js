import styles from './StyleMvVietNam.module.scss';
import classNames from 'classnames/bind';
import ListMv from '~/components/ListMV';
import { CategoryLIst } from '~/assets/DataMV/VietNam';
import { MusicNoteIcon, ArrowDownIcon, MenuAlt2Icon } from '~/components/Icons';
import ButtonMv from '~/components/ButtonMv';
const cx = classNames.bind(styles);

function MvVietNam() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('choose-btn')}>
                <ButtonMv list dataV={CategoryLIst}>
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
            <ListMv />
        </div>
    );
}

export default MvVietNam;
