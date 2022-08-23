import styles from './StyleUsUk.module.scss';
import classNames from 'classnames/bind';
import { MusicNoteIcon, ArrowDownIcon, MenuAlt2Icon } from '~/components/Icons';
import ButtonMv from '~/components/ButtonMv';
import { CategoryLIstUsUK } from '~/assets/DataMV/UsUK';
import ListMv from '~/components/ListMV';

const cx = classNames.bind(styles);

function UsUk() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('choose-btn')}>
                <ButtonMv list dataUsUK={CategoryLIstUsUK}>
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
            <ListMv MvUsUk />
        </div>
    );
}

export default UsUk;
