import styles from './sidebarStyle.module.scss';
import classNames from 'classnames/bind';
import TitleSidebar from '~/components/sidebar/TitleSidebar';
import {
    LibraryIcon,
    DiscIcon,
    ChartIcon,
    RadioIcon,
    FeedIcon,
    PlayCircleOutlineIcon,
    MusicIcon,
    CategoryAltIcon,
    StarIcon,
    MusicVideoIcon,
    FolderMusicIcon,
    QueueMusicIcon,
    ClockIcon,
    AddIcon,
} from '~/components/Icons';

import UpdateVip from '~/components/sidebar/updateVip';
import Button from '~/components/Button';

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
            <div className={cx('list-title')}>
                <TitleSidebar rightIcon={<PlayCircleOutlineIcon />} leftIcon={<LibraryIcon />} to="/">
                    Cá Nhân
                </TitleSidebar>
                <TitleSidebar leftIcon={<DiscIcon />} to="/discover">
                    Khám Phá
                </TitleSidebar>
                <TitleSidebar rightIcon={<PlayCircleOutlineIcon />} leftIcon={<ChartIcon />} to="/zingchart">
                    #zingchart
                </TitleSidebar>
                <TitleSidebar
                    btn={<Button btnLive>Live</Button>}
                    rightIcon={<PlayCircleOutlineIcon />}
                    leftIcon={<RadioIcon />}
                    to="/radioLive"
                >
                    Radio
                </TitleSidebar>
                <TitleSidebar leftIcon={<FeedIcon />} to="/following">
                    Theo Dõi
                </TitleSidebar>
            </div>
            <div className={cx('sidebar-scrollbar')}>
                <TitleSidebar to="/newMusic" leftIcon={<MusicIcon />} rightIcon={<PlayCircleOutlineIcon />}>
                    Nhạc Mới
                </TitleSidebar>
                <TitleSidebar to="/category" leftIcon={<CategoryAltIcon />}>
                    Thể Loại
                </TitleSidebar>
                <TitleSidebar to="/topMusic" leftIcon={<StarIcon />}>
                    Top 100
                </TitleSidebar>
                <TitleSidebar to="/mv" leftIcon={<MusicVideoIcon />}>
                    MV
                </TitleSidebar>
            </div>
            <UpdateVip>Nghe Nhạc không quảng cáo cùng kho nhạc Vip</UpdateVip>
            <div className={cx('library')}>
                <h4>Thư Viện</h4>
                <TitleSidebar
                    textSmall
                    to="/music"
                    leftIcon={<FolderMusicIcon />}
                    rightIcon={<PlayCircleOutlineIcon />}
                >
                    Bài hát
                </TitleSidebar>
                <TitleSidebar textSmall to="/playlist" leftIcon={<QueueMusicIcon />}>
                    Playlist
                </TitleSidebar>
                <TitleSidebar textSmall to="/recently" leftIcon={<ClockIcon />}>
                    Gần đây
                </TitleSidebar>
            </div>
            <div className={cx('sidebar-bottom')}>
                <TitleSidebar leftIcon={<AddIcon />}>Tạo playlist mới</TitleSidebar>
            </div>
        </div>
    );
}

export default Sidebar;
