import styles from './DiscoverStyle.module.scss';
import classNames from 'classnames/bind';
import SliderImg from '~/components/discover/slider';
import { KeyboardArrowRightIcon } from '~/components/Icons';
import RecentlyMusic from '~/components/discover/Recently';
import IntroducSong from '~/components/discover/IntroducSong';
import Button from '~/components/Button';
import NewRelease from '~/components/discover/NewRelease';
import SongByDay from '~/components/discover/SongByday';
import InfoSinger from '~/components/InfoSinger';
import Artists from '~/components/discover/Altist';
import TotalPoster from '~/components/TotalPoster';
import SliderSinger from '~/components/discover/SliderSinger';
import Radio from '~/components/discover/Radio';
import TopRanking from '~/components/discover/TopRanking';
import TotalEvent from '~/components/discover/TotalEvent';
import ListParner from '~/components/discover/ListParner';

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
            <div className={cx('SongByDay')}>
                <h3>Thứ Sáu Đây Rồi</h3>
                <SongByDay />
            </div>
            <div className={cx('fan-singer')}>
                <InfoSinger />
                <IntroducSong singer />
            </div>
            <div className={cx('artist')}>
                <h3>Nghệ Sĩ Yêu Thích</h3>
                <Artists discover />
            </div>
            <div className={cx('MusicEveryDay')}>
                <h3>Nhạc Mới Mối Ngày</h3>
                <IntroducSong musicEveryDay />
            </div>
            <div className={cx('poster')}>
                <TotalPoster />
            </div>
            <div className={cx('singer')}>
                <SliderSinger />
            </div>
            <div className={cx('top')}>
                <h3>Top 100</h3>
                <IntroducSong />
            </div>
            <div className={cx('edm')}>
                <InfoSinger pass />
                <IntroducSong />
            </div>
            <div className={cx('SongByDay')}>
                <h3>XONE's CORNER</h3>
                <SongByDay />
            </div>
            <div className={cx('radio')}>
                <h3>Radio Nổi Bật</h3>
                <Radio />
            </div>
            <div className={cx('newMusic')}>
                <h3>Nhạc Mới</h3>
                <TopRanking />
                <IntroducSong />
            </div>
            <div className={cx('event')}>
                <h3>Sự kiện</h3>
                <TotalEvent />
            </div>
            <div className={cx('partner')}>
                <h4>Đối Tác Âm Nhạc</h4>
                <ListParner />
            </div>
        </div>
    );
}

export default Discover;
