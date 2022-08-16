import classNames from 'classnames/bind';
import styles from './TitleSidebar.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function TitleSidebar({
    to,
    href,
    textSmall = false,
    leftIcon = false,
    rightIcon = false,
    btn = false,
    onClick,
    children,
    ...passProp
}) {
    let Comp = 'div';
    let props = {
        onClick,
        ...passProp,
    };

    if (to) {
        props.to = to;
        Comp = NavLink;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrap', {
        textSmall,
    });

    return (
        <Comp className={classes} {...props}>
            <span>
                {leftIcon && <span className={cx('icon-svg')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {btn && <span>{btn}</span>}
            </span>
            {rightIcon && <span className={cx('icon-play')}>{rightIcon}</span>}
        </Comp>
    );
}

export default TitleSidebar;
