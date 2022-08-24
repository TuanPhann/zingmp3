import styles from './StyleMVIndividual.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MvInvidual() {
    return (
        <div className={cx('wrap')}>
            <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-mv-dark.png" alt="logo" />
            <p>Chưa Có MV Nào Trong Thư Viện Cá Nhân</p>
            <Button btnEvents>KHÁM PHÁ NGAY</Button>
        </div>
    );
}

export default MvInvidual;
