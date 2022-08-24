import styles from './StyleSongFavorite.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    MusicFavoriteIcon,
    HeartFavoriteIcon,
    DotsHorizontalFavoriteIcon,
    MicrophoneFavoriteIcon,
    MusicVideoFavoriteIcon,
    PlayFillFavoriteIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function SongFavorite({ info }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('info-song')}>
                <div className={cx('icon-music')}>
                    <MusicFavoriteIcon />
                </div>
                <input type="checkbox" className={cx('check')} />
                <div className={cx('image')}>
                    <img src={info.images} alt={info.name} />
                    <button className={cx('btn-play')}>
                        <PlayFillFavoriteIcon />
                    </button>
                </div>
                <div className={cx('song')}>
                    <div className={cx('name')}>
                        <h3>{info.name}</h3>
                        {info.tick && (
                            <div className={cx('vip')}>
                                <Button bntVip>VIP</Button>
                            </div>
                        )}
                    </div>
                    <p>{info.author}</p>
                </div>
            </div>
            <div className={cx('info-Album')}>
                <p>{info.author}</p>
            </div>
            <div className={cx('info-time')}>
                <div className={cx('icon')}>
                    <Tippy content="Xem Mv">
                        <button>
                            <MusicVideoFavoriteIcon />
                        </button>
                    </Tippy>
                    <Tippy content="Phát cùng lời bài hát ">
                        <button>
                            <MicrophoneFavoriteIcon />
                        </button>
                    </Tippy>
                    <Tippy content="Thêm vào thư viện">
                        <button>
                            <HeartFavoriteIcon />
                        </button>
                    </Tippy>
                    <Tippy content="Khác">
                        <button>
                            <DotsHorizontalFavoriteIcon />
                        </button>
                    </Tippy>
                </div>
                <div className={cx('time')}>{info.time}</div>
            </div>
        </div>
    );
}

export default SongFavorite;
