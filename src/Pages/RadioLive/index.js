import styles from './StyleRadioLive.module.scss';
import classNames from 'classnames/bind';
import Radio from '~/components/discover/Radio';
import ListPodCastRadio from '~/components/ListPodCastRadio';
import CategoryPodCast from '~/components/CategoryPodCast';
import RadioOutStanding from '~/components/RadioOutStanding';
import ShowOutStanding from '~/components/ShowOutStanding';
import InfoSinger from '~/components/InfoSinger';

const cx = classNames.bind(styles);

function RadioLive() {
    return (
        <div className={cx('container')}>
            <div className={cx('bg-image')}>
                <div className={cx('blur')}></div>
                <div className={cx('alpha')}></div>
                <div className={cx('alpha-1')}></div>
            </div>
            <div className={cx('wrap')}>
                <div className={cx('live')}>
                    <Radio />
                </div>
                <div className={cx('podcast')}>
                    <h3>Khám Phá PodCast</h3>
                    <ListPodCastRadio />
                </div>
                <div className={cx('listen')}>
                    <h3>Đón Nghe</h3>
                    <div className={cx('banner')}>
                        <div className={cx('image')}>
                            <img
                                src="https://photo-zmp3.zmdcdn.me/banner/a/8/d/2/a8d2be9498f658157effc52efdcff720.jpg"
                                alt="anh quang cao"
                            />
                        </div>
                        <div className={cx('image')}>
                            <img
                                src="https://photo-zmp3.zmdcdn.me/banner/1/c/1/7/1c17ce4231c0849e71f7f77ca6d9529d.jpg"
                                alt="anh quang cao"
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('categorypodcast')}>
                    <h3>Thể Loại PodCast</h3>
                    <CategoryPodCast />
                </div>
                <div className={cx('outstanding')}>
                    <h3>Các Tập Nổi Bật</h3>
                    <RadioOutStanding />
                </div>
                <div className={cx('Show')}>
                    <h3>Chương Trình Nổi Bật</h3>
                    <ShowOutStanding />
                </div>
                <div className={cx('xone')}>
                    <InfoSinger />
                    <ListPodCastRadio />
                </div>
                <div className={cx('xone')}>
                    <InfoSinger />
                    <ListPodCastRadio />
                </div>
                <div className={cx('xone')}>
                    <InfoSinger />
                    <ListPodCastRadio />
                </div>
                <div className={cx('xone')}>
                    <InfoSinger />
                    <ListPodCastRadio />
                </div>
                <div className={cx('xone')}>
                    <InfoSinger />
                    <ListPodCastRadio />
                </div>
            </div>
        </div>
    );
}

export default RadioLive;
