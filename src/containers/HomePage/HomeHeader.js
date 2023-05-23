import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions/appActions';
import { withRouter } from 'react-router';
import Slider from 'react-slick';
import banner6 from '../../assets/Slide-banner/banner6.jpg';
import banner7 from '../../assets/Slide-banner/banner7.jpg';
import banner2 from '../../assets/Slide-banner/banner2.jpg';
import banner3 from '../../assets/Slide-banner/banner3.webp';
import banner4 from '../../assets/Slide-banner/banner4.jpg';
import banner5 from '../../assets/Slide-banner/banner5.jpg';



class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    render() {
        let language = this.props.language;
        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img src={logo} className='header-logo' onClick={() => this.returnToHome()} />
                        </div>
                        <div className='center-content '>
                            <a href="#ChuyenKhoa" className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </a>
                            <a href="#cosoyte" className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </a>
                            <a href="#bacsi" className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                            </a>
                            <a href="#camnang" className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.check-health" /></div>
                            </a>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle"></i><FormattedMessage id="homeheader.support" /></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                    <div className='home-header-banner'>
                        <Slider {...setting}>
                            <div className='section-customize'>
                                <img src={banner4} width="100%" height="660px" />
                            </div>
                            <div className='section-customize'>
                                <img src={banner7} width="100%" height="660px" />
                            </div>
                            <div className='section-customize'>
                                <img src={banner2} width="100%" height="660px" />
                            </div>
                            <div className='section-customize'>
                                <img src={banner3} width="100%" height="660px" />
                            </div>
                            <div className='section-customize'>
                                <img src={banner6} width="100%" height="660px" />
                            </div>
                            <div className='section-customize'>
                                <img src={banner5} width="100%" height="660px" />
                            </div>
                        </Slider>
                        {/* <div className='content-up'>
                            <div className='title1'><FormattedMessage id="banner.title1" /></div>
                            <div className='title2'><FormattedMessage id="banner.title2" /></div>
                            <div className='search'>
                                <i className="fas fa-search"></i><input type='text' placeholder='Tìm chuyên khoa' />
                            </div>
                        </div> */}
                        {/* <div className='content-down'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="far fa-hospital"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fa fa-mobile"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fa fa-bed" aria-hidden="true"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-flask"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fa fa-user-md" aria-hidden="true"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-briefcase-medical"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                }

                {/* <div className='section-share section-handbook'>
                    <div className='section-container'>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <img src={bookingcare} width="100%" height="660px" />
                                </div>
                                <div className='section-customize'>
                                    <img src={bookingcare} width="100%" height="660px" />
                                </div>
                                <div className='section-customize'>
                                    <img src={bookingcare} width="100%" height="660px" />
                                </div>
                                <div className='section-customize'>
                                    <img src={bookingcare} width="100%" height="660px" />
                                </div>
                                <div className='section-customize'>
                                    <img src={bookingcare} width="100%" height="660px" />
                                </div>
                                <div className='section-customize'>
                                    <img src={bookingcare} width="100%" height="660px" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
