import styles from './StyleSongNew.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function NewSong({ info }) {
    return (
        <div className={cx('wraper')}>
            <div className={cx('image')}>
                <img src={info.img} alt={info.name} />
            </div>
            <div className={cx('info-song')}>
                <div className={cx('name-song')}>
                    <h5>{info.name}</h5>
                    {info.tick && <Button bntVip>VIP</Button>}
                </div>
                <p>{info.singer}</p>
                <p>{info.time}</p>
            </div>
        </div>
    );
}

export default NewSong;
