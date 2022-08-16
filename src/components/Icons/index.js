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
