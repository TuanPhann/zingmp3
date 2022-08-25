import styles from './StyleButton.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    // leftIcon = false,
    // RightIcon = false,
    btnCategory = false,
    btnRadio = false,
    btnMv = false,
    btnEvents = false,
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
        btnEvents,
        btnMv,
        btnCategory,
    });
    return (
        <Compn className={clases} {...Props}>
            {/* {leftIcon && <>{leftIcon}</>} */}
            {children}
            {/* {RightIcon && <>{RightIcon}</>} */}
        </Compn>
    );
}

export default Button;
