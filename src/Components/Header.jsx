import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className="row align-items-center header-container ">
                    <div className="col-md-12 text-right">
                        <span className=" login_label languageLabel lang-text">Français</span>
                    </div>
                    <div className="col-12 " style={{ padding: '0px 10px' }}>
                        <div className="row align-items-center content-area ">
                            <div className="col-md-4"><img src="/Images/bby_logo.png" className="brandlogo" alt="logo" />
                            </div>
                            <div className="col-md-5 ">
                                <span tabIndex="0" className="headertitle">Welcome to Best Buy Queue !</span>
                            </div>
                        </div>                                                    
                    </div>                    
                </div>
                <div className='row align-items-center bottomMenu' />                
            </div>
        )
    }
}
