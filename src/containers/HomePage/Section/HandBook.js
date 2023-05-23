import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
//import css files
import Slider from 'react-slick';
import { LANGUAGES } from '../../../utils';
import { getAllHandbook } from '../../../services/userService';
import { withRouter } from 'react-router';


class HandBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataHandBook: []
        }
    }

    async componentDidMount() {
        let res = await getAllHandbook();
        if (res && res.errCode === 0) {
            this.setState({
                dataHandBook: res.data ? res.data : []
            })
        }
    }
    handleViewDetailHandbook = (handbook) => {
        if (this.props.history) {
            this.props.history.push(`/detail-handbook/${handbook.id}`)
        }
    }
    render() {
        let { language } = this.props;
        return (
            <div className='section-share section-handbook'>
                <p id='camnang'>.</p>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id='homepage.handbook' /></span>
                        <button className='btn-section'><FormattedMessage id='homepage.more-infor' /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {
                                this.state.dataHandBook.map((item, index) => {
                                    return (
                                        <div className='section-customize' key={index}
                                            onClick={() => this.handleViewDetailHandbook(item)}>
                                            <div className='bg-image section-handbook'
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className='name'>{item.name}</div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HandBook));
