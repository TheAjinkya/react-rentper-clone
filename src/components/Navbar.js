import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (<>
        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-4 col-md-4 col-5"> <a href="#" className="brand-wrap" data-abc="true">
                            {/* <img className="logo" src="http://ampexamples.com/data/upload/2017/08/bootstrap2_logo.png"/>  */}
                            <span className="logo">RentPer</span> </a> </div>
                        <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                            <form action="#" className="search-wrap">
                                <div className="input-group w-100">
                                    <input type="text" className="form-control search-form" style={{ width: '55%' }} placeholder="Search" />
                                    <div className="input-group-append"> <button className="btn btn-primary search-button" type="submit"> <i className="fa fa-search"></i> </button> </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                            <div className="d-flex justify-content-end"> <a target="_blank" href="#" data-abc="true" className="nav-link widget-header"> <i className="fas fa fa-whatsapp"></i></a> <span className="vl"></span>
                                <div className="dropdown btn-group"> <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-abc="true"><i className="fas fa fa-bell"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                                        <li>
                                            <div className="notification-title">More Info</div>
                                            <div className="notification-list">
                                                <div className="list-group"> <a href="affiliates" className="list-group-item list-group-item-action active" data-abc="true">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img"><img src="https://img.icons8.com/nolan/100/000000/helping-hand.png" alt="" className="user-avatar-md rounded-circle" /></div>
                                                        <div className="notification-list-user-block"><span className="notification-list-user-name">Affiliate program</span> </div>
                                                    </div>
                                                </a> <a href="redemption-center" className="list-group-item list-group-item-action active" data-abc="true">
                                                        <div className="notification-info">
                                                            <div className="notification-list-user-img"><img src="https://img.icons8.com/bubbles/100/000000/prize.png" alt="" className="user-avatar-md rounded-circle" /></div>
                                                            <div className="notification-list-user-block"><span className="notification-list-user-name">Redemption Center</span> </div>
                                                        </div>
                                                    </a> <a href="#" className="list-group-item list-group-item-action active" data-abc="true">
                                                        <div className="notification-info">
                                                            <div className="notification-list-user-img">
                                                                <img src="https://img.icons8.com/ultraviolet/100/000000/medal.png" alt="" className="user-avatar-md rounded-circle" /></div>
                                                            <div className="notification-list-user-block"><span className="notification-list-user-name">Achievements</span> </div>
                                                        </div>
                                                    </a> <a href="#" className="list-group-item list-group-item-action active" data-abc="true">
                                                        <div className="notification-info">
                                                            <div className="notification-list-user-img">
                                                                <img src="https://img.icons8.com/bubbles/100/000000/call-female.png" alt="" className="user-avatar-md rounded-circle" /></div>
                                                            <div className="notification-list-user-block"><span className="notification-list-user-name">Contact us</span> </div>
                                                        </div>
                                                    </a> </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> <span className="vl"></span> <a className="nav-link nav-user-img" href="#" data-toggle="modal" data-target="#login-modal" data-abc="true"><span className="login">LOGIN</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-md navbar-main border-bottom">
                <div className="container-fluid">
                    <form className="d-md-none my-2">
                        <div className="input-group"> <input type="search" name="search" className="form-control" placeholder="Search" required="" />
                            <div className="input-group-append"> <button type="submit" className="btn btn-secondary"> <i className="fa fa-search"></i> </button> </div>
                        </div>
                    </form> <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#dropdown6" aria-expanded="false"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="navbar-collapse collapse" id="dropdown6">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/professionals">Professionals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" data-toggle="dropdown" data-abc="true" aria-expanded="false">Laptops</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="" data-abc="true">Lenovo</a>
                                    <a className="dropdown-item" href="" data-abc="true">Dell</a>
                                    <a className="dropdown-item" href="" data-abc="true">HP</a>
                                    <a className="dropdown-item" href="" data-abc="true">Apple</a>
                                </div>
                            </li>
                            <li className="nav-item"> <a className="nav-link" href="" data-abc="true">Refurbished Mobile</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="" data-abc="true">Accessories & Peripheral</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="" data-abc="true">Blog</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="" data-abc="true">Support</a> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>)
}

export default Navbar