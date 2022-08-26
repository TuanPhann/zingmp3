import styles from './styleAllPlayList.module.scss';
import classNames from 'classnames/bind';
import CreatePlayList from '~/components/createPlaylist';

const cx = classNames.bind(styles);

function AllPlayList() {
    return (
        <div className={cx('wrap')}>
            <CreatePlayList />
        </div>
    );
}

export default AllPlayList;
