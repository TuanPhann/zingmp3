import styles from './StyleMusic.module.scss';
import classNames from 'classnames/bind';
import HeaderIndividual from '../ Individual/HeaderIndividual';
import { publicRouteIndividual } from '~/routes/routeIndividual';
import { Routes, Route } from 'react-router-dom';

const cx = classNames.bind(styles);

function Music() {
    return (
        <div className={cx('wrapper')}>
            <HeaderIndividual />
            <Routes>
                {publicRouteIndividual.map((item, index) => {
                    const Pages = item.component;
                    return <Route key={index} path={item.path} element={<Pages />} />;
                })}
            </Routes>
        </div>
    );
}

export default Music;
