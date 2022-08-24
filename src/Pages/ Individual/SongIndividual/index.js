import styles from './StyleSongIndividual.module.scss';
import classNames from 'classnames/bind';
import BtnNavLink from '~/components/btnNavLink';
import { publicRouteIndividualChildrent } from '~/routes/routeIndividual';
import { Routes, Route } from 'react-router-dom';
import { DataFavoriteNavLink } from '~/routes/routeIndividual';

const cx = classNames.bind(styles);

function SongIndividual() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('btn-nav-link')}>
                {DataFavoriteNavLink.map((info, index) => {
                    return <BtnNavLink favorite key={index} info={info} />;
                })}
            </div>
            <div className={cx('content')}>
                <Routes>
                    {publicRouteIndividualChildrent.map((item, index) => {
                        const Pagess = item.component;
                        return <Route key={index} path={item.path} element={<Pagess />} />;
                    })}
                </Routes>
            </div>
        </div>
    );
}

export default SongIndividual;
