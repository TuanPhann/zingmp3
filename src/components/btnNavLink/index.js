import styles from './styleBntNavLink.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from '@mantine/core';

const cx = classNames.bind(styles);

function BtnNavLink({ info, favorite }) {
    const location = useLocation();

    if (favorite) {
        return (
            <div className={cx('wrapper')}>
                <NavLink
                    classNames={{ root: 'my-btn-root' }}
                    label={info.lable}
                    component={Link}
                    to={info.path}
                    active={location.pathname === info.path}
                    styles={(theme) => ({
                        root: {
                            marginRight: 15,
                            border: '1px solid #fff',
                            color: '#fff',
                            borderRadius: 30,
                            paddingTop: 2,
                            paddingBottom: 2,

                            '&:hover': {
                                backgroundColor: 'unset',
                                borderColor: '#7200a1',
                                color: '#7200a1',
                            },
                        },

                        label: {
                            fontSize: 12,
                        },
                    })}
                />
            </div>
        );
    }
}

export default BtnNavLink;
