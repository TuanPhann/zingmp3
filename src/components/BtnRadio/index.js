import styles from './StyleBtnRadio.module.scss';
import classNames from 'classnames/bind';
import { CricleSvg } from '~/assets/Musics/Radio/svg';
import Button from '../Button';

const cx = classNames.bind(styles);

function BtnRadio({ info }) {
    return (
        <div className={cx('wraper')}>
            <div className={cx('display')}>
                <CricleSvg />
                <div className={cx('image')}>
                    <img src={info.img} alt={info.name} />
                </div>
                <div className={cx('small-image')}>
                    <img src={info.imgSmall} alt={info.name} />
                </div>
                <Button btnLive btnRadio>
                    Live
                </Button>
            </div>
            <div className={cx('title')}>
                <h4>{info.name}</h4>
                <p>{info.text}</p>
            </div>
        </div>
    );
}

export default BtnRadio;
