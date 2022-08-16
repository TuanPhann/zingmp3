import Sidebar from './Sidebar';
import Playlist from './Playlist';
import Header from './Header';
import MusicControl from './MusicControl';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Header />
                    <div>{children}</div>
                </div>
                <Playlist />
            </div>
            <div className={cx('control')}>
                <MusicControl />
            </div>
        </div>
    );
}

export default DefaultLayout;
