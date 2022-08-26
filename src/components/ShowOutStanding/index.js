import styles from './StyleShowStanding.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ShowOutStanding() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('show')}>
                <div className={cx('image')}>
                    <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/8/4/678408238d07e2012027a96bff12d196.jpg"
                        alt="avatar"
                    />
                </div>
                <div className={cx('info-show')}>
                    <h5>XONE Radio</h5>
                    <h3>XONE With Stars</h3>
                    <p>
                        Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music producer,... Hẹn hò cùng các nghệ sĩ
                        trong nước: Tóc Tiên, Đức Phúc... hay gặp gỡ độc quyền các nghệ sĩ Quốc tế: Alan Walker, Rita
                        Ora…cùng XONE Radio. Khám phá và thưởng thức âm nhạc đa sắc màu. Phát trực tiếp lúc 18h00 thứ 6,
                        phát lại lúc 19h00 Chủ nhật hàng tuần tại tab XONE Radio trên Zing MP3 và tần số FM 89MHz. XONE
                        WITH STARS - Dating with Stars Đừng quên đón nghe bạn nhé! #XONEwStars #Music
                    </p>
                </div>
            </div>
            <div className={cx('show')}>
                <div className={cx('image')}>
                    <img
                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/8/4/c/f84c36fa27e1243a86d48ec87bab01d0.jpg"
                        alt="avatar"
                    />
                </div>
                <div className={cx('info-show')}>
                    <h5>Tun Cảm Ơn</h5>
                    <h3>Đắp Chăn Nằm Nghe Tun Kể</h3>
                    <p>
                        Là series podcast đầu tiên của Tun, nơi Tun và các bạn có thể trải lòng với nhau về những điều
                        mệt mỏi trong cuộc sống, cùng cho nhau những lời khuyên hay ho, cùng chữa lành những tổn thương,
                        đổ vỡ để trái tim tụi mình một lần nữa được ngập tràn yêu thương. Tun hy vọng những chia sẻ của
                        mình có thể mang lại những giây phút thư thái, dễ chịu cho bạn trước khi đi ngủ.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShowOutStanding;
