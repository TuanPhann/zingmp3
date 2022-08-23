import styles from './StyleKpop.module.scss';
import classNames from 'classnames/bind';
import ButtonMv from '~/components/ButtonMv';
import { MusicNoteIcon, ArrowDownIcon, MenuAlt2Icon } from '~/components/Icons';
import { CategoryLIstKpop } from '~/assets/DataMV/Kpop';
import ListMv from '~/components/ListMV';
const cx = classNames.bind(styles);

function Kpop() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('choose-btn')}>
                <ButtonMv list dataKpop={CategoryLIstKpop}>
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
            <ListMv MvKpop />
        </div>
    );
}

export default Kpop;
