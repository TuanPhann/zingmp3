import styles from './DiscoverStyle.module.scss';
import classNames from 'classnames/bind';
import SliderImg from '~/components/discover/slider';
import { KeyboardArrowRightIcon } from '~/components/Icons';
import RecentlyMusic from '~/components/discover/Recently';
import IntroducSong from '~/components/discover/IntroducSong';
import Button from '~/components/Button';
import NewRelease from '~/components/discover/NewRelease';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <SliderImg />
            <div className={cx('title')}>
                <h3>Gần đây</h3>
                <div className={cx('all')}>
                    <p>TẤT CẢ</p>
                    <KeyboardArrowRightIcon />
                </div>
            </div>

            <RecentlyMusic />
            <div className={cx('introduc-song')}>
                <h3>Có thể bạn muốn nghe</h3>
                <IntroducSong />
            </div>
            <div className={cx('NewRelease')}>
                <h3>Mới Phát Hành</h3>
                <div className={cx('btn')}>
                    <div className={cx('btn-release')}>
                        <Button bntNewRelease bntNewReleaseActive>
                            BÀI HÁT
                        </Button>
                        <Button bntNewRelease>ALBUM</Button>
                    </div>
                    <div className={cx('all')}>
                        <p>TẤT CẢ</p>
                        <KeyboardArrowRightIcon />
                    </div>
                </div>
                <div className={cx('song')}>
                    <NewRelease />
                </div>
            </div>
        </div>
    );
}

export default Discover;
