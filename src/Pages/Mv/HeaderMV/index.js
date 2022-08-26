import styles from './StyleHeaderMV.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderMV({ MV, Playlist, Recently }) {
    const location = useLocation();
    if (MV) {
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
    } else if (Playlist) {
        return (
            <div className={cx('wrap-2')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>
                        <h3>Playlist</h3>
                    </div>
                    <div className={cx('navbar-title')}>
                        <NavLink
                            classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                            label="TẤT CẢ"
                            component={Link}
                            to="/individual/playlist"
                            active={location.pathname === '/individual/playlist'}
                        />
                        <NavLink
                            classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                            label="CỦA TÔI"
                            component={Link}
                            to="/individual/playlist/owner"
                            active={location.pathname === '/individual/playlist/owner'}
                        />
                    </div>
                </div>
            </div>
        );
    } else if (Recently) {
        return (
            <div className={cx('wrap-3')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>
                        <h3>Phát Gần Đây</h3>
                    </div>
                    <div className={cx('navbar-title')}>
                        <NavLink
                            classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                            label="BÀI HÁT"
                            component={Link}
                            to="/individual/recently/song"
                            active={location.pathname === '/individual/recently/song'}
                        />
                        <NavLink
                            classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                            label="PLAYLIST"
                            component={Link}
                            to="/individual/recently"
                            active={location.pathname === '/individual/recently'}
                        />
                        <NavLink
                            classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                            label="MV"
                            component={Link}
                            to="/individual/recently/mv"
                            active={location.pathname === '/individual/recently/mv'}
                        />
                        <NavLink
                            classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                            label="RADIO"
                            component={Link}
                            to="/individual/recently/radio"
                            active={location.pathname === '/individual/recently/radio'}
                        />
                        <NavLink
                            classNames={{ body: 'my-span-mv', root: 'my-btn-mv', label: 'my-text-mv' }}
                            label="PODCAST"
                            component={Link}
                            to="/individual/recently/podcast"
                            active={location.pathname === '/individual/recently/podcast'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMV;
