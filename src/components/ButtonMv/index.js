import styles from './StyleButtonMv.module.scss';
import classNames from 'classnames/bind';

import { Popover, Button } from '@mantine/core';

const cx = classNames.bind(styles);

function ButtonMv({ children, list = false }) {
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
                        {list ? (
                            <div className={cx('wrap')}>
                                <div className={cx('item')}>Rap-Việt</div>
                                <div className={cx('item')}>Rook-Việt</div>
                                <div className={cx('item')}>Nhạc Trữ Tình</div>
                                <div className={cx('item')}>Nhạc Cách Mạng</div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </Popover.Dropdown>
                </Popover>
            ) : (
                <Popover width={200} position="bottom" withArrow shadow="md">
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
                        <div className={cx('wrap')}>ajhsdvhja</div> : <div></div>
                    </Popover.Dropdown>
                </Popover>
            )}
        </div>
    );
}

export default ButtonMv;
