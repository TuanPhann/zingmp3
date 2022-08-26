import styles from './StyleIndividual.module.scss';
import classNames from 'classnames/bind';
import { Routes, Route } from 'react-router-dom';
import { publicRouteIndividual } from '~/routes/routeIndividual';
import HeaderIndividual from '~/Pages/ Individual/HeaderIndividual';

const cx = classNames.bind(styles);

function Individual() {
    return (
        <div className={cx('wrapper')}>
            <HeaderIndividual Individual />
            <Routes>
                {publicRouteIndividual.map((item, index) => {
                    const Pages = item.component;
                    return <Route key={index} path={item.path} element={<Pages />} />;
                })}
            </Routes>
        </div>
    );
}

export default Individual;
