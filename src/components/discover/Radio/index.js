import styles from './StyleRadio.module.scss';
import classNames from 'classnames/bind';
import BtnRadio from '~/components/BtnRadio';
import { InfoRadio } from '~/assets/Musics';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

function Radio() {
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 7,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
    };
    return (
        <div className={cx('wrap')}>
            <Slider {...settings}>
                {InfoRadio.map((info) => {
                    return <BtnRadio key={info.id} info={info} />;
                })}
            </Slider>
        </div>
    );
}

export default Radio;
