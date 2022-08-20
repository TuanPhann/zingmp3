import styles from './StyleButton.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    btnRadio = false,
    bntNewRelease = false,
    bntVip = false,
    bntNewReleaseActive = false,
    btnUpdateVip = false,
    btnLive = false,
    onClick,
    ...passProp
}) {
    let Compn = 'button';
    const Props = {
        onClick,
        ...passProp,
    };

    if (to) {
        Props.to = to;
        Compn = Link;
    } else if (href) {
        Props.href = href;
        Compn = 'a';
    }

    const clases = cx('wrapper', {
        btnLive,
        btnUpdateVip,
        bntNewRelease,
        bntNewReleaseActive,
        bntVip,
        btnRadio,
    });
    return (
        <Compn className={clases} {...Props}>
            {children}
        </Compn>
    );
}

export default Button;
