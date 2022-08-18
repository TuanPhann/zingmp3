import styles from './StyleMusicControl.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import {
    DotsHorizontalIcon,
    HeartIcon,
    ShuffleIcon,
    SkipNextIcon,
    SkipPreviousIcon,
    PlayCircleIcon,
    RepeatIcon,
    MicrophoneIcon,
    RestoreIcon,
    VolumeFullIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function MusicControl() {
    function setvalue() {}

    function setVolume() {}

    return (
        <div className={cx('wrap')}>
            <div className={cx('song')}>
                <div className={cx('image')}>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="avatar"
                    />
                </div>
                <div className={cx('info')}>
                    <h4>Nhìn về phía em</h4>
                    <p>Đình Dũng, Minh Vương</p>
                </div>
                <HeartIcon />
                <DotsHorizontalIcon />
            </div>
            <div className={cx('control')}>
                <div className={cx('btn')}>
                    <Tippy content="Phát ngẫu nhiên">
                        <button>
                            <ShuffleIcon />
                        </button>
                    </Tippy>
                    <button>
                        <SkipPreviousIcon />
                    </button>
                    <button>
                        <PlayCircleIcon />
                    </button>
                    <button>
                        <SkipNextIcon />
                    </button>
                    <Tippy content="Phát lại bài hát">
                        <button>
                            <RepeatIcon />
                        </button>
                    </Tippy>
                </div>
                <div className={cx('slider')}>
                    <div className={cx('current-time')}>00:00</div>
                    <input type="range" min="1" max="100" value="0" className={cx('seek-slider')} onChange={setvalue} />
                    <div className={cx('total-time')}>00:00</div>
                </div>
            </div>
            <div className={cx('icon')}>
                <Tippy content="Xem lời bài hát">
                    <button>
                        <MicrophoneIcon />
                    </button>
                </Tippy>
                <Tippy content="Chế độ cửa sổ">
                    <button>
                        <RestoreIcon />
                    </button>
                </Tippy>
                <button>
                    <VolumeFullIcon />
                </button>
                <input type="range" min="1" max="100" value="0" className={cx('volum-slider')} onChange={setVolume} />
            </div>
        </div>
    );
}

export default MusicControl;
