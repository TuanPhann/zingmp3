import styles from './styleMyPlayList.module.scss';
import classNames from 'classnames/bind';
import CreatePlayList from '~/components/createPlaylist';

const cx = classNames.bind(styles);

function MyPlayList() {
    return (
        <div className={cx('wrap')}>
            <CreatePlayList />
        </div>
    );
}

export default MyPlayList;
