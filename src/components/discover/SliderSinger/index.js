// import styles from './StyleSliderSinger.module.scss';
// import classNames from 'classnames/bind';
import Slider from 'react-slick';
import Singer from '~/components/Singer';
import { ImgSinger } from '~/assets/Musics';

// const cx = classNames.bind(styles);

function SliderSinger() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <Slider {...settings}>
            {ImgSinger.map((info) => {
                return <Singer key={info.id} info={info} />;
            })}
        </Slider>
    );
}

export default SliderSinger;
