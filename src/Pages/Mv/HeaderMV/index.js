import styles from './StyleHeaderMV.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderMV() {
    const location = useLocation();
    return (
        <div className={cx('wrap')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                    <h3>MV</h3>
                </div>
                <div className={cx('navbar-title')}>
                    <NavLink
                        classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                        label="VIỆT NAM"
                        component={Link}
                        to="/mv"
                        active={location.pathname === '/mv'}
                    />
                    <NavLink
                        classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                        label="US-UK"
                        component={Link}
                        to="/mv/usuk"
                        active={location.pathname === '/mv/usuk'}
                    />
                    <NavLink
                        classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                        label="KPOP"
                        component={Link}
                        to="/mv/kpop"
                        active={location.pathname === '/mv/kpop'}
                    />
                    <NavLink
                        classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                        label="HÒA TẤU"
                        component={Link}
                        to="/mv/hoatau"
                        active={location.pathname === '/mv/hoatau'}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderMV;
