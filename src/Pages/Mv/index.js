import styles from './StyleMV.module.scss';
import classNames from 'classnames/bind';
import HeaderMV from './HeaderMV';
// import Button from '~/components/Button';

import { publicRouteMV } from '~/routes/routeMV';
import { Route, Routes } from 'react-router-dom';

const cx = classNames.bind(styles);

function Mv() {
    return (
        <div className={cx('wrapper')}>
            <HeaderMV />

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
