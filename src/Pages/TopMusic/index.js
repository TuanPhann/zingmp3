import styles from './styleTopMusic.module.scss';
import classNames from 'classnames/bind';
import IntroducSong from '~/components/discover/IntroducSong';

const cx = classNames.bind(styles);

function TopMusic() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrap')}>
                <div className={cx('blur')}></div>
                <div className={cx('bg-alpha')}></div>
                <div className={cx('bg-alpha-1')}></div>
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('outstanding')}>
                    <h3>Nổi Bật</h3>
                    <IntroducSong />
                </div>
                <div className={cx('TopMusicV')}>
                    <h3>Top Nhạc Việt</h3>
                    <IntroducSong topmusic />
                </div>
                <div className={cx('topmusicCA')}>
                    <h3>Nhạc Châu á</h3>
                    <IntroducSong />
                </div>
                <div className={cx('topmusicUsUk')}>
                    <h3>Nhạc Âu Mỹ</h3>
                    <IntroducSong musicUsUk />
                </div>

                <div className={cx('topmusicHoaTau')}>
                    <h3>Nhạc Hòa Tấu</h3>
                    <IntroducSong musicHoaTau />
                </div>
            </div>
        </div>
    );
}

export default TopMusic;
