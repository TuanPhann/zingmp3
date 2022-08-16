import styles from './UpdateVipStyle.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function UpdateVip({ children }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('update-vip')}>
                <p>{children}</p>
                <Button href="/vip" btnUpdateVip>
                    Nâng cấp Vip
                </Button>
            </div>
        </div>
    );
}

export default UpdateVip;
