import styles from './StyleAlbum.module.scss';
import classNames from 'classnames/bind';
import { PlayCircleOutlineDiscover, HeartDiscoverIcon, DotsHorizontalDiscover } from '~/components/Icons';

const cx = classNames.bind(styles);

function InfoAlbum({ info }) {
    return (
        <div className={cx('wraper')}>
            <div className={cx('display')}>
                <div className={cx('image')}>
                    <img src={info.img} alt={info.name} />
                </div>
                <div className={cx('hover')}>
                    <button>
                        <HeartDiscoverIcon />
                    </button>
                    <button>
                        <PlayCircleOutlineDiscover />
                    </button>
                    <button>
                        <DotsHorizontalDiscover />
                    </button>
                </div>
            </div>
            <h4>{info.name}</h4>
            {info.check ? (
                <div className={cx('introduc')}>
                    <span>{info.textOne}</span>
                    <p>{info.textTwo}</p>
                </div>
            ) : (
                <p>{info.singer}</p>
            )}
        </div>
    );
}

export default InfoAlbum;
