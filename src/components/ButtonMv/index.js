import styles from './StyleButtonMv.module.scss';
import classNames from 'classnames/bind';

import { Popover, Button } from '@mantine/core';

const cx = classNames.bind(styles);

function ButtonMv({ children, list = false, dataV, dataUsUK, dataKpop, dataHoaTau }) {
    let Layout = [];

    if (dataV) {
        Layout = dataV;
    } else if (dataUsUK) {
        Layout = dataUsUK;
    } else if (dataKpop) {
        Layout = dataKpop;
    } else if (dataHoaTau) {
        Layout = dataHoaTau;
    }

    return (
        <div>
            {list ? (
                <Popover
                    closeOnClickOutside
                    width={400}
                    position="bottom-start"
                    withArrow
                    shadow="md"
                    styles={(theme) => ({
                        arrow: {
                            marginLeft: 35,
                            backgroundColor: '#424040',
                            border: 'unset',
                        },

                        dropdown: {
                            backgroundColor: '#ffffff1a',
                            padding: 0,
                            border: 'unset',
                            // overflow: 'hidden',
                        },
                    })}
                >
                    <Popover.Target>
                        <Button
                            styles={(theme) => ({
                                root: {
                                    backgroundColor: '#ffffff1a',
                                    borderRadius: 30,
                                    marginRight: 15,

                                    '&:hover': {
                                        backgroundColor: '#ffffff1a',
                                    },
                                },

                                label: {
                                    color: '#fff',
                                    fontWeight: 500,
                                },
                            })}
                        >
                            {children}
                        </Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <div className={cx('wrap')}>
                            {Layout.map((names) => {
                                return (
                                    <div key={names.id} className={cx('item')}>
                                        {names.name}
                                    </div>
                                );
                            })}
                        </div>
                    </Popover.Dropdown>
                </Popover>
            ) : (
                <Popover
                    closeOnClickOutside
                    width={180}
                    position="bottom-start"
                    withArrow
                    shadow="md"
                    styles={(theme) => ({
                        arrow: {
                            marginLeft: 35,
                            backgroundColor: '#424040',
                            border: 'unset',
                        },

                        dropdown: {
                            backgroundColor: '#ffffff1a',
                            padding: 0,
                            border: 'unset',
                            // overflow: 'hidden',
                        },
                    })}
                >
                    <Popover.Target>
                        <Button
                            styles={(theme) => ({
                                root: {
                                    backgroundColor: '#ffffff1a',
                                    borderRadius: 30,
                                    marginRight: 15,

                                    '&:hover': {
                                        backgroundColor: '#ffffff1a',
                                    },
                                },

                                label: {
                                    color: '#fff',
                                    fontWeight: 500,
                                },
                            })}
                        >
                            {children}
                        </Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <div className={cx('container')}>
                            <div className={cx('item')}>Nghe Nhiều </div>
                            <div className={cx('item')}>Nổi Bật</div>
                            <div className={cx('item')}>Nhiều Nhất</div>
                        </div>
                    </Popover.Dropdown>
                </Popover>
            )}
        </div>
    );
}

export default ButtonMv;
