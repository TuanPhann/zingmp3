import styles from './StyleLogo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Logo({ info }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <figure className={cx('image')}>
                    <img src={info.img} alt={info.name} />
                </figure>
            </div>
        </div>
    );
}

export default Logo;
