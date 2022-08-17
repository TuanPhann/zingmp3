import styles from './HeaderStyle.module.scss';
import classNames from 'classnames/bind';
import { ArrowLeftIcon, ArrowRightIcon } from '~/components/Icons';
import HeaderSearch from '~/components/HeaderSearch';
import BtnHeader from '~/components/allBtnHeader';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('iconArrow-searchInput')}>
                <ArrowLeftIcon />
                <ArrowRightIcon />
                <HeaderSearch />
            </div>

            <BtnHeader />
        </div>
    );
}

export default Header;
