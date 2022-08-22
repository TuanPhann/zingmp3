import styles from './StylelayoutMv.module.scss';
import classNames from 'classnames/bind';
import HeaderMV from '~/Pages/Mv/HeaderMV';

import React from 'react';

const cx = classNames.bind(styles);

function LayoutMv({ children }) {
    return (
        <React.Fragment>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <HeaderMV />
                </div>
                <div className={cx('totalMv')}>{children}</div>
            </div>
        </React.Fragment>
    );
}

export default LayoutMv;
