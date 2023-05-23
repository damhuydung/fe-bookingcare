import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import bookingcare from '../../../assets/bookingcare.png';

//import css files



class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    <FormattedMessage id='homepage.infor-bookingcare' />
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <img src={bookingcare} width="100%" height="400px" />
                    </div>
                    <div className='content-right'>
                        {/* <p>Mùa hạ - mùa của những chuyến đi xa cùng ánh nắng vàng trên những tán cây.
                            Đến với chuyên mục 'Nhạc gối đầu giường' hôm nay là những thanh âm của tự do và tuổi trẻ của ca khúc 'Đi Theo Bóng Mặt Trời' đến từ Đen và Giang Nguyễn.
                            'Thà làm con kiến tự do còn
                            hơn là chúa sơn lâm ở trong cũi'
                            Mong rằng những giai điệu này sẽ tiếp thêm năng lượng tích cực đến với người nghe của Đài để bắt đầu một mùa hè đầy trãi nghiệm.</p> */}
                        <div className='infor-bookingcare'>
                            <div className='if-bk'><a>Liên hệ hợp tác</a></div>
                            <div className='if-bk'><a>Sức khỏe doanh nghiệp</a></div>
                            <div className='if-bk'><a>Gói chuyển đổi số doanh nghiệp</a></div>
                            <div className='if-bk'><a>Tuyển dụng</a></div>
                            <div className='if-bk'><a>Câu hỏi thường gặp</a></div>
                            <div className='if-bk'><a>Điều khoản sử dụng</a></div>
                            <div className='if-bk'><a>Chính sách bảo mật</a></div>
                            <div className='if-bk'><a>Quy trình hỗ trợ giải quyết khiếu nại</a></div>
                            <div className='if-bk'><a>Câu hỏi thường gặp</a></div>
                            <div className='if-bk'><a>Quy chế hoạt động</a></div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
