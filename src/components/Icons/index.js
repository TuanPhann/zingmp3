import React, { Fragment } from 'react';
import styled from 'styled-components';
import { LibraryMusic } from '@styled-icons/material-outlined/LibraryMusic';
import { Disc } from '@styled-icons/bootstrap/Disc';
import { StatsChart } from '@styled-icons/ionicons-solid/StatsChart';
import { RadioOutline } from '@styled-icons/evaicons-outline/RadioOutline';
import { Feed } from '@styled-icons/material-outlined/Feed';
import { PlayCircleOutline } from '@styled-icons/material-outlined/PlayCircleOutline';
import { Music } from '@styled-icons/feather/Music';
import { CategoryAlt } from '@styled-icons/boxicons-regular/CategoryAlt';
import { Star } from '@styled-icons/heroicons-outline/Star';
import { MusicVideo } from '@styled-icons/material/MusicVideo';
import { FolderMusic } from '@styled-icons/entypo/FolderMusic';
import { QueueMusic } from '@styled-icons/material-rounded/QueueMusic';
import { Clock } from '@styled-icons/fluentui-system-filled/Clock';
import { Add } from '@styled-icons/fluentui-system-filled/Add';
import { ArrowLeft } from '@styled-icons/fluentui-system-regular/ArrowLeft';
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight';
import { Search } from '@styled-icons/evil/Search';
import { Gem } from '@styled-icons/bootstrap/Gem';
import { Upload } from '@styled-icons/feather/Upload';
import { Settings } from '@styled-icons/feather/Settings';
import { ClockAlarm } from '@styled-icons/fluentui-system-filled/ClockAlarm';
import { DotsHorizontal } from '@styled-icons/heroicons-outline/DotsHorizontal';
import { Heart } from '@styled-icons/heroicons-outline/Heart';
import { SkipPrevious } from '@styled-icons/boxicons-regular/SkipPrevious';
import { PlayCircle } from '@styled-icons/feather/PlayCircle';
import { SkipNext } from '@styled-icons/boxicons-regular/SkipNext';
import { Shuffle } from '@styled-icons/ionicons-outline/Shuffle';
import { Repeat } from '@styled-icons/ionicons-outline/Repeat';
import { Microphone } from '@styled-icons/heroicons-outline/Microphone';
import { Restore } from '@styled-icons/fluentui-system-regular/Restore';
import { VolumeFull } from '@styled-icons/boxicons-regular/VolumeFull';
import { KeyboardArrowRight } from '@styled-icons/material-outlined/KeyboardArrowRight';
import { PlayFill } from '@styled-icons/bootstrap/PlayFill';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { MenuAlt2 } from '@styled-icons/heroicons-solid/MenuAlt2';
import { Bookmark } from '@styled-icons/bootstrap/Bookmark';
import { AddCircle } from '@styled-icons/fluentui-system-regular/AddCircle';
import { PauseCircle } from '@styled-icons/fluentui-system-regular/PauseCircle';

// icon title Individual Sidebar
const LbMusic = styled(LibraryMusic)`
    width: 25px;
    height: 26px;
`;
export const LibraryIcon = () => {
    return (
        <Fragment>
            <LbMusic />
        </Fragment>
    );
};

// icon title Discover Sidebar
const IconDisc = styled(Disc)`
    width: 25px;
    height: 26px;
`;
export const DiscIcon = () => {
    return (
        <Fragment>
            <IconDisc />
        </Fragment>
    );
};

// icon title ZingChart Sidebar
const IconChart = styled(StatsChart)`
    width: 25px;
    height: 26px;
`;
export const ChartIcon = () => {
    return (
        <Fragment>
            <IconChart />
        </Fragment>
    );
};

// icon title Radiolive Sidebar
const IconRadio = styled(RadioOutline)`
    width: 25px;
    height: 26px;
`;
export const RadioIcon = () => {
    return (
        <Fragment>
            <IconRadio />
        </Fragment>
    );
};

// icon title Following Sidebar
const IconFeed = styled(Feed)`
    width: 25px;
    height: 26px;
`;
export const FeedIcon = () => {
    return (
        <Fragment>
            <IconFeed />
        </Fragment>
    );
};

// icon play hover
const IconPlayCircleOutline = styled(PlayCircleOutline)`
    width: 25px;
    height: 26px;
`;
export const PlayCircleOutlineIcon = () => {
    return (
        <Fragment>
            <IconPlayCircleOutline />
        </Fragment>
    );
};

// icon newMusic Sidebar
const IconMusic = styled(Music)`
    width: 25px;
    height: 26px;
`;
export const MusicIcon = () => {
    return (
        <Fragment>
            <IconMusic />
        </Fragment>
    );
};

// icon Category Sidebar
const IconCategoryAlt = styled(CategoryAlt)`
    width: 25px;
    height: 26px;
`;
export const CategoryAltIcon = () => {
    return (
        <Fragment>
            <IconCategoryAlt />
        </Fragment>
    );
};

// icon top Sidebar
const IconStar = styled(Star)`
    width: 25px;
    height: 26px;
`;
export const StarIcon = () => {
    return (
        <Fragment>
            <IconStar />
        </Fragment>
    );
};

// icon MV Sidebar
const IconMusicVideo = styled(MusicVideo)`
    width: 25px;
    height: 26px;
`;
export const MusicVideoIcon = () => {
    return (
        <Fragment>
            <IconMusicVideo />
        </Fragment>
    );
};

// icon Music Sidebar
const IconFolderMusic = styled(FolderMusic)`
    width: 25px;
    height: 26px;
`;
export const FolderMusicIcon = () => {
    return (
        <Fragment>
            <IconFolderMusic />
        </Fragment>
    );
};

// icon playlist Sidebar
const IconQueueMusic = styled(QueueMusic)`
    width: 25px;
    height: 26px;
`;
export const QueueMusicIcon = () => {
    return (
        <Fragment>
            <IconQueueMusic />
        </Fragment>
    );
};

// icon recently Sidebar
const IconClock = styled(Clock)`
    width: 25px;
    height: 26px;
`;
export const ClockIcon = () => {
    return (
        <Fragment>
            <IconClock />
        </Fragment>
    );
};

// icon add Sidebar
const IconAdd = styled(Add)`
    width: 25px;
    height: 26px;
`;
export const AddIcon = () => {
    return (
        <Fragment>
            <IconAdd />
        </Fragment>
    );
};

// icon left header
const IconArrowLeft = styled(ArrowLeft)`
    width: 50px;
    height: 26px;
    color: #878484;
`;
export const ArrowLeftIcon = () => {
    return (
        <span>
            <IconArrowLeft />
        </span>
    );
};

// icon right header
const IconArrowRight = styled(ArrowRight)`
    width: 50px;
    height: 26px;
    color: #878484;
`;
export const ArrowRightIcon = () => {
    return (
        <span>
            <IconArrowRight />
        </span>
    );
};

// icon search header
const IconSearch = styled(Search)`
    width: 50px;
    height: 26px;
    color: #878484;
    cursor: pointer;
`;
export const SearchIcon = () => {
    return (
        <span>
            <IconSearch />
        </span>
    );
};

// icon theme header
export const ThemeIcon = ({ className }) => {
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20">
            <defs>
                <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                    <stop offset="0%" stopColor="#F81212"></stop>
                    <stop offset="100%" stopColor="red"></stop>
                </linearGradient>
                <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                    <stop offset="0%" stopColor="#00F"></stop>
                    <stop offset="100%" stopColor="#0031FF"></stop>
                </linearGradient>
                <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                    <stop offset="0%" stopColor="#FFA600"></stop>
                    <stop offset="100%" stopColor="orange"></stop>
                </linearGradient>
                <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                    <stop offset="0%" stopColor="#13EFEC"></stop>
                    <stop offset="100%" stopColor="#00E8DF"></stop>
                </linearGradient>
                <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <filter
                    id="301mo6jeah"
                    width="312.7%"
                    height="312.7%"
                    x="-106.4%"
                    y="-106.4%"
                    filterUnits="objectBoundingBox"
                >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <filter
                    id="b2zvzgq7fj"
                    width="295%"
                    height="295%"
                    x="-97.5%"
                    y="-97.5%"
                    filterUnits="objectBoundingBox"
                >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                </filter>
                <path
                    id="qtpqrj1oda"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                ></path>
                <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                <path
                    id="2eiwxjmc7m"
                    d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                ></path>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(2 3)">
                <mask id="tinejqaasb" fill="#fff">
                    <use xlinkHref="#qtpqrj1oda"></use>
                </mask>
                <use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
                <g mask="url(#tinejqaasb)">
                    <g transform="translate(-2 -3)">
                        <mask id="uf3ckvfvpf" fill="#fff">
                            <use xlinkHref="#jggzvnjgfc"></use>
                        </mask>
                        <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
                        <circle
                            cx="8.9"
                            cy="6.8"
                            r="9"
                            fill="url(#j32lhg93hd)"
                            filter="url(#4a7imk8mze)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                        <circle
                            cx="9.3"
                            cy="13.7"
                            r="5.5"
                            fill="url(#hjoavsus6g)"
                            filter="url(#301mo6jeah)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                        <circle
                            cx="15.9"
                            cy="6.9"
                            r="6"
                            fill="url(#la1y5u3dvi)"
                            filter="url(#b2zvzgq7fj)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                        <circle
                            cx="16.4"
                            cy="17.7"
                            r="7.5"
                            fill="url(#2dsmrlvdik)"
                            filter="url(#a1wq161tvl)"
                            mask="url(#uf3ckvfvpf)"
                        ></circle>
                    </g>
                </g>
                <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
            </g>
        </svg>
    );
};

// icon Vip header
const IconGem = styled(Gem)`
    width: 20px;
    height: 20px;
    color: #878484;
`;
export const GemIcon = () => {
    return (
        <span>
            <IconGem />
        </span>
    );
};

// icon upLoad header
const IconUpload = styled(Upload)`
    width: 20px;
    height: 20px;
    color: #878484;
`;
export const UploadIcon = () => {
    return (
        <span>
            <IconUpload />
        </span>
    );
};

// icon setting header
const IconSettings = styled(Settings)`
    width: 20px;
    height: 20px;
    color: #878484;
`;
export const SettingsIcon = () => {
    return (
        <span>
            <IconSettings />
        </span>
    );
};

// icon clock playlist
const IconClockAlarm = styled(ClockAlarm)`
    width: 20px;
    height: 20px;
    color: #878484;
`;
export const ClockAlarmIcon = () => {
    return (
        <span>
            <IconClockAlarm />
        </span>
    );
};

// icon threedot playlist
const IconDotsHorizontal = styled(DotsHorizontal)`
    width: 20px;
    height: 20px;
    color: #878484;
`;
export const DotsHorizontalIcon = () => {
    return (
        <span>
            <IconDotsHorizontal />
        </span>
    );
};

// icon Heart MusicControl
const IconHeart = styled(Heart)`
    width: 20px;
    height: 20px;
    color: #878484;
    margin-right: 15px;
`;
export const HeartIcon = () => {
    return (
        <span>
            <IconHeart />
        </span>
    );
};

// icon random MusicControl
const IconShuffle = styled(Shuffle)`
    width: 32px;
    height: 32px;
    padding: 5px;
`;
export const ShuffleIcon = () => {
    return (
        <span>
            <IconShuffle />
        </span>
    );
};

// icon prev MusicControl
const IconSkipPrevious = styled(SkipPrevious)`
    width: 46px;
    height: 46px;
    color: #fff;
    padding: 5px;
`;
export const SkipPreviousIcon = () => {
    return (
        <span>
            <IconSkipPrevious />
        </span>
    );
};

// icon play MusicControl
const IconPlayCircle = styled(PlayCircle)`
    width: 60px;
    height: 60px;
    color: #fff;
    padding: 5px;
`;
export const PlayCircleIcon = () => {
    return (
        <span>
            <IconPlayCircle />
        </span>
    );
};

// icon next MusicControl
const IconSkipNext = styled(SkipNext)`
    width: 46px;
    height: 46px;
    color: #fff;
    padding: 5px;
`;
export const SkipNextIcon = () => {
    return (
        <span>
            <IconSkipNext />
        </span>
    );
};

// icon reload MusicControl
const IconRepeat = styled(Repeat)`
    width: 32px;
    height: 32px;

    padding: 5px;
`;
export const RepeatIcon = () => {
    return (
        <span>
            <IconRepeat />
        </span>
    );
};

// icon Microphone MusicControl
const IconMicrophone = styled(Microphone)`
    width: 22px;
    height: 22px;
    color: #fff;
    margin-left: 15px;
`;
export const MicrophoneIcon = () => {
    return (
        <span>
            <IconMicrophone />
        </span>
    );
};

// icon Restore MusicControl
const IconRestore = styled(Restore)`
    width: 22px;
    height: 22px;
    color: #fff;
    margin-left: 15px;
`;
export const RestoreIcon = () => {
    return (
        <span>
            <IconRestore />
        </span>
    );
};

// icon VolumeFull MusicControl
const IconVolumeFull = styled(VolumeFull)`
    width: 22px;
    height: 22px;
    color: #fff;
    margin-left: 15px;
`;
export const VolumeFullIcon = () => {
    return (
        <span>
            <IconVolumeFull />
        </span>
    );
};

// icon arrowRight Discover
const IconKeyboardArrowRight = styled(KeyboardArrowRight)`
    width: 23px;
    height: 23px;
`;
export const KeyboardArrowRightIcon = () => {
    return (
        <span>
            <IconKeyboardArrowRight />
        </span>
    );
};

// icon btnPlay Playlist
const IconPlayFill = styled(PlayFill)`
    width: 23px;
    height: 23px;
    color: #fff;
`;
export const PlayFillIcon = () => {
    return (
        <span>
            <IconPlayFill />
        </span>
    );
};

// icon btnPlay Discover
const IconPlayCircleOutlineDiscover = styled(PlayCircleOutline)`
    width: 50px;
    height: 50px;
    color: #fff;
`;
export const PlayCircleOutlineDiscover = () => {
    return (
        <span>
            <IconPlayCircleOutlineDiscover />
        </span>
    );
};

// icon Heart Discover
const IconHeartDiscover = styled(Heart)`
    width: 23px;
    height: 23px;
    color: #fff;
`;
export const HeartDiscoverIcon = () => {
    return (
        <span>
            <IconHeartDiscover />
        </span>
    );
};

// icon DotsHorizontal Discover
const IconDotsHorizontalDiscover = styled(DotsHorizontal)`
    width: 23px;
    height: 23px;
    color: #fff;
`;
export const DotsHorizontalDiscover = () => {
    return (
        <span>
            <IconDotsHorizontalDiscover />
        </span>
    );
};

// icon btnPlayfill discover
const IconPlayFillDiscover = styled(PlayFill)`
    width: 30px;
    height: 30px;
    color: #fff;
`;
export const PlayFillDiscover = () => {
    return (
        <span>
            <IconPlayFillDiscover />
        </span>
    );
};

// icon btnPlay Discover
const IconPlayCircleOutlineNewMusic = styled(PlayCircleOutline)`
    width: 50px;
    height: 50px;
    color: #fff;
`;
export const PlayCircleOutlineNewMusic = () => {
    return (
        <span>
            <IconPlayCircleOutlineNewMusic />
        </span>
    );
};

// icon music note page MV
const IconMusicNote = styled(Music)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;
export const MusicNoteIcon = () => {
    return (
        <span>
            <IconMusicNote />
        </span>
    );
};

// icon arrow down page MV
const IconArrowDown = styled(ArrowIosDownwardOutline)`
    width: 20px;
    height: 20px;
    margin-left: 20px;
`;
export const ArrowDownIcon = () => {
    return (
        <span>
            <IconArrowDown />
        </span>
    );
};

// icon menu page MV
const IconMenuAlt2 = styled(MenuAlt2)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;
export const MenuAlt2Icon = () => {
    return (
        <span>
            <IconMenuAlt2 />
        </span>
    );
};

// icon btnPlay MV
const IconPlayCircleOutlineMV = styled(PlayCircleOutline)`
    width: 50px;
    height: 50px;
    color: #fff;
`;
export const PlayCircleOutlineMV = () => {
    return (
        <span>
            <IconPlayCircleOutlineMV />
        </span>
    );
};

// icon btnPlay header individual
const IconPlayFillIndividual = styled(PlayFill)`
    width: 26px;
    height: 26px;
    color: #fff;
`;
export const PlayFillIndividualIcon = () => {
    return (
        <span>
            <IconPlayFillIndividual />
        </span>
    );
};

// icon music note favorite
const IconMusicFavorite = styled(Music)`
    width: 15px;
    height: 15px;
    color: #fff;
`;
export const MusicFavoriteIcon = () => {
    return (
        <span>
            <IconMusicFavorite />
        </span>
    );
};

// icon Heart Favorite
const IconHeartFavorite = styled(Heart)`
    width: 15px;
    height: 15px;
    color: #878484;
`;
export const HeartFavoriteIcon = () => {
    return (
        <span>
            <IconHeartFavorite />
        </span>
    );
};

// icon threedot Favorite
const IconDotsHorizontalFavorite = styled(DotsHorizontal)`
    width: 15px;
    height: 15px;
    color: #878484;
`;
export const DotsHorizontalFavoriteIcon = () => {
    return (
        <span>
            <IconDotsHorizontalFavorite />
        </span>
    );
};

// icon Microphone Favorite
const IconMicrophoneFavorite = styled(Microphone)`
    width: 15px;
    height: 15px;
    color: #878484;
`;
export const MicrophoneFavoriteIcon = () => {
    return (
        <span>
            <IconMicrophoneFavorite />
        </span>
    );
};

// icon MV favorite
const IconMusicVideoFavorite = styled(MusicVideo)`
    width: 15px;
    height: 15px;
    color: #878484;
`;
export const MusicVideoFavoriteIcon = () => {
    return (
        <span>
            <IconMusicVideoFavorite />
        </span>
    );
};

// icon btnPlay Favorite
const IconPlayFillFavorite = styled(PlayFill)`
    width: 23px;
    height: 23px;
    color: #fff;
`;
export const PlayFillFavoriteIcon = () => {
    return (
        <span>
            <IconPlayFillFavorite />
        </span>
    );
};

// icon bookmark radio
const IconBookmark = styled(Bookmark)`
    width: 14px;
    height: 14px;
    color: #fff;
`;
export const BookmarkIcon = () => {
    return (
        <span>
            <IconBookmark />
        </span>
    );
};

// icon threedot raido
const IconDotsHorizontalRadio = styled(DotsHorizontal)`
    width: 20px;
    height: 20px;
    color: #fff;
`;
export const DotsHorizontalRadioIcon = () => {
    return (
        <span>
            <IconDotsHorizontalRadio />
        </span>
    );
};

// icon btnPlay Radio
const IconPlayFillRadio = styled(PlayFill)`
    width: 25px;
    height: 25px;
    color: #fff;
`;
export const PlayFillRadioIcon = () => {
    return (
        <span>
            <IconPlayFillRadio />
        </span>
    );
};

// icon add page Playlist
const IconAddCircle = styled(AddCircle)`
    width: 50px;
    height: 50px;
`;
export const AddCircleIcon = () => {
    return (
        <span>
            <IconAddCircle />
        </span>
    );
};

// icon pause MusicControl
const IconPauseCircle = styled(PauseCircle)`
    width: 60px;
    height: 60px;
    color: #fff;
    padding: 5px;
`;
export const PauseCircleIcon = () => {
    return (
        <span>
            <IconPauseCircle />
        </span>
    );
};
