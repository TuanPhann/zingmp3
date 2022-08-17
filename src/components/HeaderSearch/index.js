import styles from './HeaderSearchStyle.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

export default function HeaderSearch() {
    return (
        <div className={cx('wrap')}>
            <SearchIcon />
            <input placeholder="tìm kiếm bài hát, nghệ sĩ, lời bài hát ..." />
        </div>
    );
}
