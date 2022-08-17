import styles from './StyleAllBtnHeader.module.scss';
import classNames from 'classnames/bind';

import { ThemeIcon, GemIcon, UploadIcon, SettingsIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function BtnHeader() {
    return (
        <div className={cx('wrap')}>
            <Tippy content="Chủ đề">
                <button>
                    <ThemeIcon />
                </button>
            </Tippy>
            <Tippy content="Nâng cấp VIP">
                <button>
                    <GemIcon />
                </button>
            </Tippy>
            <Tippy content="Tải lên">
                <button>
                    <UploadIcon />
                </button>
            </Tippy>
            <Tippy content="Cài đặt">
                <button>
                    <SettingsIcon />
                </button>
            </Tippy>
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
