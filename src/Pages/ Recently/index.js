import styles from './styleRecently.module.scss';
import classNames from 'classnames/bind';
import HeaderMV from '../Mv/HeaderMV';
import { Routes, Route } from 'react-router-dom';
import { publicRouteRecentlyChildrent } from '~/routes/routeRecently';

const cx = classNames.bind(styles);

function Recently() {
    return (
        <div className={cx('container')}>
            <HeaderMV Recently />

            <Routes>
                {publicRouteRecentlyChildrent.map((item, index) => {
                    const Pages = item.component;
                    return <Route key={index} path={item.path} element={<Pages />} />;
                })}
            </Routes>
        </div>
    );
}

export default Recently;
