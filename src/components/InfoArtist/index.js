import styles from './StyleInfoArtist.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function InfoArtist({ info, discover, category }) {
    if (discover) {
        return (
            <div className={cx('wraper')}>
                <div className={cx('image')}>
                    <img className={cx('avatar')} src={info.img} alt={info.name} />
                </div>
                <div className={cx('introduce')}>
                    <h3>{info.name}</h3>
                    <div className={cx('small-img')}>
                        <div className={cx('avatar-1')}>
                            <img src={info.img1} alt="avatar" />
                        </div>
                        <div className={cx('avatar-2')}>
                            {' '}
                            <img src={info.img2} alt="avatar" />
                        </div>
                        <div className={cx('avatar-3')}>
                            <img src={info.img3} alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (category) {
        return (
            <div className={cx('wraper-1')}>
                <div className={cx('image')}>
                    <img className={cx('avatar')} src={info.img} alt={info.name} />
                </div>
                <div className={cx('introduce')}>
                    <h3>{info.name}</h3>
                    <div className={cx('small-img')}>
                        <div className={cx('avatar-1')}>
                            <img src={info.img1} alt="avatar" />
                        </div>
                        <div className={cx('avatar-2')}>
                            {' '}
                            <img src={info.img2} alt="avatar" />
                        </div>
                        <div className={cx('avatar-3')}>
                            <img src={info.img3} alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoArtist;
