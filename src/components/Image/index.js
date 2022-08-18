import classNames from 'classnames/bind';
import styles from './ImageStyle.module.scss';

const cx = classNames.bind(styles);

function Image({ images, classes }) {
    return (
        <div className={cx('wrap')}>
            <img className={classes} src={images.img} alt={images.name} />
        </div>
    );
}

export default Image;
