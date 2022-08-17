import styles from './StyleAllBtnHeader.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import { ThemeIcon, GemIcon, UploadIcon, SettingsIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function BtnHeader() {
    return (
        <div className={cx('wrap')}>
            <Button btnHeader>
                <ThemeIcon />
            </Button>
            <Button btnHeader>
                <GemIcon />
            </Button>
            <Button btnHeader>
                <UploadIcon />
            </Button>
            <Button btnHeader>
                <SettingsIcon />
            </Button>
            <div className={cx('avarta-user')}>
                <img
                    src="https://s120-ava-talk-zmp3.zmdcdn.me/f/2/1/4/3/120/f7407754bbcc0e487708dbfef928bb45.jpg"
                    alt="anh avatar"
                    className={cx('avatar')}
                />
            </div>
        </div>
    );
}

export default BtnHeader;
