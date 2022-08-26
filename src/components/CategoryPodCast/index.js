import styles from './StyleCategoryPodCast.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CategoryPodCast() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('image')}>
                <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/2/8/7/0/28700b2057fd36c92742b3015b263b7d.jpg"
                    alt="anh logo"
                />
            </div>
            <div className={cx('image')}>
                <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/f/6/5/af6588f6d58fbfbb68f4231441801c15.jpg"
                    alt="anh logo"
                />
            </div>
            <div className={cx('image')}>
                <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/8/6/7/1/8671a1447b5088d30c8dce06a3b2e24c.jpg"
                    alt="anh logo"
                />
            </div>
            <div className={cx('image')}>
                <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg"
                    alt="anh logo"
                />
            </div>
            <div className={cx('image')}>
                <img
                    src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/0/b/f/f/0bff0f141d91ac637556872d0008751f.jpg"
                    alt="anh logo"
                />
            </div>
        </div>
    );
}

export default CategoryPodCast;
