import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row align-items-center header-container ">
                    <div className="col-12 " style={{ padding: '0px 10px' }}>
                        <div className="row align-items-center content-area ">
                            <div className="col-md-4"><img src="/Images/bby_logo.png" className="brandlogo" alt="logo" />
                            </div>
                            <div className="col-md-5 ">
                                <span tabIndex="0" className="headertitle">What do you need help with?</span>
                            </div></div>
                    </div></div>
                <div className='row align-items-center bottomMenu'>
                    <div className=" col-12">
                        <div className="row  align-items-center mx-auto content-area">
                            <div className="col-md-12 text-right subheader-right">
                                <span className=" login_label">Sign In</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}