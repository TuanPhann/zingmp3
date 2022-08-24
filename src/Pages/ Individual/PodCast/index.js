import styles from './stylePodCast.module.scss';
import classNames from 'classnames/bind';
import { DataPodCastNavLink } from '~/routes/routeIndividual';
import BtnNavLink from '~/components/btnNavLink';
import { Routes, Route } from 'react-router-dom';
import { publicRouteIndividualPodCast } from '~/routes/routeIndividual';

const cx = classNames.bind(styles);

function PodCast() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('btn-nav-link')}>
                {DataPodCastNavLink.map((info, index) => {
                    return <BtnNavLink favorite key={index} info={info} />;
                })}
            </div>
            <div className={cx('content')}>
                <Routes>
                    {publicRouteIndividualPodCast.map((item, index) => {
                        const Pagess = item.component;
                        return <Route key={index} path={item.path} element={<Pagess />} />;
                    })}
                </Routes>
            </div>
        </div>
    );
}

export default PodCast;
