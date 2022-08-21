import styles from './StyleTopRanking.module.scss';
import classNames from 'classnames/bind';
import Ranking from '~/components/Ranking';
import { InfoNewMusic } from '~/assets/Musics';
import Slider from 'react-slick';

const cx = classNames.bind(styles);
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
}

function TopRanking() {
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('wrap')}>
            <Slider {...settings}>
                {InfoNewMusic.map((info) => {
                    return <Ranking key={info.id} info={info} />;
                })}
            </Slider>
        </div>
    );
}

export default TopRanking;
