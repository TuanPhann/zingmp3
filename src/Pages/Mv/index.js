import styles from './StyleMV.module.scss';
import classNames from 'classnames/bind';
import HeaderMV from './HeaderMV';
// import Button from '~/components/Button';
import { MusicNoteIcon, ArrowDownIcon, MenuAlt2Icon } from '~/components/Icons';
import { publicRouteMV } from '~/routes/routeMV';
import { Route, Routes } from 'react-router-dom';
import ButtonMv from '~/components/ButtonMv';

const cx = classNames.bind(styles);

function Mv() {
    return (
        <div className={cx('wrapper')}>
            <HeaderMV />
            <div className={cx('choose-btn')}>
                <ButtonMv list>
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
            <Routes>
                {publicRouteMV.map((item, index) => {
                    const Pages = item.component;
                    return <Route key={index} path={item.path} element={<Pages />} />;
                })}
            </Routes>
        </div>
    );
}

export default Mv;
