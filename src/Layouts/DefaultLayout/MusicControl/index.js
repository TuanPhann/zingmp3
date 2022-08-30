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
    PauseCircleIcon,
} from '~/components/Icons';
import { useContext, useEffect, useRef, useState } from 'react';
import { Songs } from '~/Context';

const cx = classNames.bind(styles);

function MusicControl() {
    const infoSong = useContext(Songs);
    const [activebtnRandom, setActivebtnRandom] = useState(false);
    const [activebtnRepeat, setActivebtnRepeat] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [currentSong, setCurrentSong] = useState(0);
    const [song, setSong] = useState({});

    const elAudio = useRef(null);

    useEffect(() => {
        const dataCurrentSong = infoSong[currentSong];

        setSong(dataCurrentSong);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong]);

    useEffect(() => {
        if (isPlay) {
            elAudio.current.play();
        } else {
            elAudio.current.pause();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [song, elAudio]);

    // xử lý random Song
    const handleRandomSong = () => {
        setActivebtnRandom(!activebtnRandom);
    };

    // xử lý repeat

    const handleRepeat = () => {
        setActivebtnRepeat(!activebtnRepeat);
    };

    //xử lý next song

    const handleNextSong = () => {
        if (activebtnRandom === true) {
            const random = Math.floor(Math.random() * infoSong.length);
            setCurrentSong(random);
        } else {
            if (currentSong + 1 > infoSong.length - 1) {
                setCurrentSong(0);
            } else {
                setCurrentSong(currentSong + 1);
            }
        }
    };

    //xử lý prev song
    function handlePrevSong() {
        if (activebtnRandom === true) {
            const random = Math.floor(Math.random() * infoSong.length);
            setCurrentSong(random);
        } else {
            if (currentSong - 1 < 0) {
                setCurrentSong(infoSong.length - 1);
            } else {
                setCurrentSong(currentSong - 1);
            }
        }
    }

    //xử Lý play song
    function handlePlay() {
        setIsPlay(!isPlay);
        if (isPlay) {
            elAudio.current.pause();
        } else {
            elAudio.current.play();
        }
    }

    //hàm xử lý set lại value  của bài hát
    function setvalue() {}

    // hàm xử lý set lại value của volume
    function setVolume() {}

    return (
        <div className={cx('wrap')}>
            <div className={cx('song')}>
                <div className={cx('image')}>
                    <img src={song.images} alt="avatar" />
                </div>
                <div className={cx('info')}>
                    <h4>{song.name}</h4>
                    <p>{song.author}</p>
                    <audio ref={elAudio} src={song.url}></audio>
                </div>
                <HeartIcon />
                <DotsHorizontalIcon />
            </div>
            <div className={cx('control')}>
                <div className={cx('btn')}>
                    <Tippy content="Phát ngẫu nhiên">
                        <button className={activebtnRandom ? 'activeRandom' : 'btnRandom'} onClick={handleRandomSong}>
                            <ShuffleIcon />
                        </button>
                    </Tippy>
                    <button onClick={handlePrevSong}>
                        <SkipPreviousIcon />
                    </button>
                    <button onClick={handlePlay}>{isPlay ? <PauseCircleIcon /> : <PlayCircleIcon />}</button>
                    <button onClick={handleNextSong}>
                        <SkipNextIcon />
                    </button>
                    <Tippy content="Phát lại bài hát">
                        <button className={activebtnRepeat ? 'activeRepeat' : 'btnRepeat'} onClick={handleRepeat}>
                            <RepeatIcon />
                        </button>
                    </Tippy>
                </div>
                <div className={cx('slider')}>
                    <div className={cx('current-time')}>00:00</div>
                    <input type="range" min="1" max="100" value="0" className={cx('seek-slider')} onChange={setvalue} />
                    <div className={cx('total-time')}>0</div>
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
