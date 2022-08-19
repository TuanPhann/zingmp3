import styles from './StyleinfoSinger.module.scss';
import classNames from 'classnames/bind';
import { InfoSingers, InfoEDM } from '~/assets/Musics';

const cx = classNames.bind(styles);

function InfoSinger({ pass }) {
    let Layout = InfoSingers;
    if (pass) {
        Layout = InfoEDM;
    }
    return (
        <div className={cx('wrap')}>
            {Layout.map((info) => {
                return (
                    <div className={cx('info-singer')} key={info.id}>
                        <div className={cx('image')}>
                            <img src={info.img} alt={info.name} />
                        </div>
                        <div className={cx('nick-name')}>
                            <p>{info.name}</p>
                            <h3>{info.singer}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default InfoSinger;
