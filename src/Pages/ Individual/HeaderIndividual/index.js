import styles from './StyleHeaderIndividual.module.scss';
import classNames from 'classnames/bind';
import { PlayFillIndividualIcon } from '~/components/Icons';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '@mantine/core';

const cx = classNames.bind(styles);

function HeaderIndividual() {
    const location = useLocation();
    return (
        <div className={cx('wrap')}>
            <div className={cx('title')}>
                <h2>Thư viện</h2>
                <button>
                    <PlayFillIndividualIcon />
                </button>
            </div>
            <div className={cx('navbar-title')}>
                <NavLink
                    classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                    label="BÀI HÁT"
                    component={Link}
                    to="/individual"
                    active={location.pathname === '/individual'}
                />
                <NavLink
                    classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                    label="PODCAST"
                    component={Link}
                    to="/individual/podcast"
                    active={location.pathname === '/individual/podcast'}
                />
                <NavLink
                    classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                    label="ALBUM"
                    component={Link}
                    to="/individual/album"
                    active={location.pathname === '/individual/album'}
                />
                <NavLink
                    classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                    label="MV"
                    component={Link}
                    to="/individual/mv"
                    active={location.pathname === '/individual/mv'}
                />
            </div>
        </div>
    );
}

export default HeaderIndividual;
