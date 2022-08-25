import styles from './styleCategory.module.scss';
import classNames from 'classnames/bind';
import Artists from '~/components/discover/Altist';
import Button from '~/components/Button';
import IntroducSong from '~/components/discover/IntroducSong';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('container')}>
            <div className={cx('banner')}>
                <img
                    src="https://photo-zmp3.zmdcdn.me/cover/f/d/1/5/fd1597b58c06b161a37a7d1fb77176c1.jpg"
                    alt="anh banner"
                />
            </div>
            <div className={cx('work')}>
                <h3>Tâm Trạng Và Hoạt Động</h3>
                <Artists category />
                <div className={cx('btn')}>
                    <Button btnCategory>TẤT CẢ</Button>
                </div>
            </div>
            <div className={cx('bolero')}>
                <h3>EDM</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Remix</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Hip-hop</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>R&B</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Nhạc Phim</h3>
                <IntroducSong />
            </div>

            <div className={cx('bolero')}>
                <h3>Nhạc Thiếu Nhi</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Nhạc Không Lời</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Indie</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Piano</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Jazz</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Acoustic</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Rock</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Nhạc Trịnh</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Latin</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Guitar</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Nhạc Âu Mỹ Bất Hủ</h3>
                <IntroducSong />
            </div>
            <div className={cx('bolero')}>
                <h3>Nhạc Việt Bất Hủ</h3>
                <IntroducSong />
            </div>
        </div>
    );
}

export default Category;
