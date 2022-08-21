import classNames from 'classnames/bind';
import styles from './ImageStyle.module.scss';

const cx = classNames.bind(styles);

function Image({ images, classes }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('image')}>
                <img className={classes} src={images.img} alt={images.name} />
            </div>
        </div>
    );
}

export default Image;
