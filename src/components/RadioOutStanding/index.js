import styles from './StyleRadioOutStanding.module.scss';
import classNames from 'classnames/bind';
import OutStanding from '../OutStanding';
import { DataOutStandingRadio } from '~/assets/DataRadio';

const cx = classNames.bind(styles);

function RadioOutStanding() {
    return (
        <div className={cx('wrap')}>
            {DataOutStandingRadio.map((info) => {
                return <OutStanding key={info.id} info={info} />;
            })}
        </div>
    );
}

export default RadioOutStanding;
