import styles from './StyleUpload.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function UpLoadSong() {
    return (
        <div className={cx('wrap')}>
            <img
                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-upload-dark.png"
                alt="logo update"
            />
            <p>Chưa Có Bài Hát Tải Lên Trong Thư Viện Cá Nhân</p>

            <Button btnEvents>TẢI LÊN NGAY</Button>
        </div>
    );
}

export default UpLoadSong;
