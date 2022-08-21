import styles from './StyleEvent.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function Event({ info }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-liveShow')}>
                <div className={cx('image')}>
                    <img src={info.img} alt={info.title} />
                </div>
                <div className={cx('info-show')}>
                    <button>{info.game}</button>
                    <h5>{info.title}</h5>
                    <p>{info.time}</p>
                </div>
            </div>
            <div className={cx('status')}>
                <div className={cx('booking')}>
                    <h3>{info.text}</h3>
                    <div className={cx('avatar-user')}>
                        <div className={cx('avatar')}>
                            <figure className={cx('image')}>
                                <img src={info.avatar1} alt="avatar" />
                            </figure>
                        </div>
                        <div className={cx('avatar')}>
                            <figure className={cx('image')}>
                                <img src={info.avatar2} alt="avatar" />
                            </figure>
                        </div>
                        <div className={cx('avatar')}>
                            <figure className={cx('image')}>
                                <img src={info.avatar3} alt="avatar" />
                            </figure>
                        </div>
                        <div className={cx('avatar')}>
                            <figure className={cx('image')}>
                                <img src={info.avatar4} alt="avatar" />
                            </figure>
                        </div>
                        <div className={cx('text-item')}>{info.booking}</div>
                    </div>
                </div>
                <div className={cx('btn')}>
                    <Button href="/liveradio" btnEvents>
                        {info.btn}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Event;
