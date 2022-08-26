import styles from './StyleListPodCastRadio.module.scss';
import classNames from 'classnames/bind';
import { DatapodcastRadio } from '~/assets/DataRadio';
import PodCastRadio from '../PodCastRadio';

const cx = classNames.bind(styles);

function ListPodCastRadio() {
    return (
        <div className={cx('wrap')}>
            {DatapodcastRadio.map((info) => {
                return <PodCastRadio key={info.id} info={info} />;
            })}
        </div>
    );
}

export default ListPodCastRadio;
