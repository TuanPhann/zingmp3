import styles from './stylePlaylist.module.scss';
import classNames from 'classnames/bind';
import TitleSidebar from '~/components/sidebar/TitleSidebar';
import { ClockAlarmIcon, DotsHorizontalIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import MenuSong from '~/components/MenuSong';

const cx = classNames.bind(styles);

function Playlist({ handleDataSong }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-menu')}>
                <div className={cx('menu')}>
                    <TitleSidebar btnPlaylist>Danh sách phát</TitleSidebar>
                    <TitleSidebar btnPlaylist btnActive>
                        Nghe gần đây
                    </TitleSidebar>
                </div>
                <div className={cx('menu-icon')}>
                    <Tippy content="Hẹn giờ dừng phát nhạc">
                        <button>
                            <ClockAlarmIcon />
                        </button>
                    </Tippy>
                    <Tippy content="Khác">
                        <button>
                            <DotsHorizontalIcon />
                        </button>
                    </Tippy>
                </div>
            </div>

            <MenuSong />
        </div>
    );
}

export default Playlist;
