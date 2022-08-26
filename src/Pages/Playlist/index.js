import styles from './StylePagePlayList.module.scss';
import classNames from 'classnames/bind';
import HeaderMV from '../Mv/HeaderMV';
import { Route, Routes } from 'react-router-dom';
import { publicRoutePlayListChildrent } from '~/routes/routePagePlayList';

const cx = classNames.bind(styles);

function Playlist() {
    return (
        <div className={cx('container')}>
            <HeaderMV Playlist />

            <Routes>
                {publicRoutePlayListChildrent.map((item, index) => {
                    const Pages = item.component;
                    return <Route key={index} path={item.path} element={<Pages />} />;
                })}
            </Routes>
        </div>
    );
}

export default Playlist;
