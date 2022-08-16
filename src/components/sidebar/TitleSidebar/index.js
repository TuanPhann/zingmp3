import classNames from 'classnames/bind';
import styles from './TitleSidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TitleSidebar({ to, href, onClick, children, ...passProp }) {
    let Comp = 'div';
    let props = {
        onClick,
        ...passProp,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrap');

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default TitleSidebar;
