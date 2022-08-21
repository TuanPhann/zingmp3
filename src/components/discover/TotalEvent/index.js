import styles from './StyleTotalEvent.module.scss';
import classNames from 'classnames/bind';
import Event from '~/components/event';
import { InfoEvents } from '~/assets/Musics';

const cx = classNames.bind(styles);

function TotalEvent() {
    return (
        <div className={cx('wrap')}>
            {InfoEvents.map((info) => {
                return <Event key={info.id} info={info} />;
            })}
        </div>
    );
}

export default TotalEvent;
