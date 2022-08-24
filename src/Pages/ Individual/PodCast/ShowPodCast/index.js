import styles from './styleShowPodCast.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ShowPodCast() {
    return (
        <div className={cx('wrap')}>
            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/record-dark.svg" alt="logo" />
            <p>Không có podcast trong thư viện cá nhân</p>
            <Button btnEvents>KHÁM PHÁ NGAY</Button>
        </div>
    );
}

export default ShowPodCast;
