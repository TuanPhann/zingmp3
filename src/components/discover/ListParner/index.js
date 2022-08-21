import styles from './StyleListParnner.module.scss';
import classNames from 'classnames/bind';
import Logo from '~/components/Logo';
import { InfoLogo } from '~/assets/Musics';

const cx = classNames.bind(styles);

function ListParner() {
    return (
        <div className={cx('wrap')}>
            {InfoLogo.map((info) => {
                return <Logo key={info.id} info={info} />;
            })}
        </div>
    );
}

export default ListParner;
