import styles from './sidebarStyle.module.scss';
import classNames from 'classnames/bind';
import TitleSidebar from '~/components/sidebar/TitleSidebar';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wraper')}>
            <div className={cx('header-logo')}>
                <img
                    className={cx('logo')}
                    alt="logo zing"
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                />
            </div>
            <div className={cx('list- title')}>
                <TitleSidebar>Cá Nhân</TitleSidebar>
                <TitleSidebar>Khám Phá</TitleSidebar>
                <TitleSidebar>#zingchart</TitleSidebar>
                <TitleSidebar>Radio</TitleSidebar>
                <TitleSidebar>Theo Dõi</TitleSidebar>
            </div>
        </div>
    );
}

export default Sidebar;
