import Image from '~/components/Image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './StyleSlider.module.scss';

import { DataSlider } from '~/assets/images';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

function SliderImg() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('slider')}>
            <Slider {...settings}>
                {DataSlider.map((images) => {
                    return <Image key={images.id} images={images} />;
                })}
            </Slider>
        </div>
    );
}

export default SliderImg;
