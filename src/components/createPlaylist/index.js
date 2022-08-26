import styles from './styleCreatePlayList.module.scss';
import classNames from 'classnames/bind';
import { AddCircleIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function CreatePlayList() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('alpha')}>
                <AddCircleIcon />
                <p>Tạo PlayList Mới</p>
            </div>
        </div>
    );
}

export default CreatePlayList;
