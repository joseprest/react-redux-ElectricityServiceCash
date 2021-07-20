import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import LogoImg from '../../../assets/img/logo.png'
import fb from '../../../assets/img/fb.png'
import it from '../../../assets/img/it.png'
import tw from '../../../assets/img/tw.png'
import li from '../../../assets/img/in.png'
import supportIcon from '../../../assets/img/icons/support-icon.png';
import aboutIcon from '../../../assets/img/icons/about-icon.png';
import accountIcon from '../../../assets/img/icons/account-icon.png';
import airtimeIcon from '../../../assets/img/icons/airtime-icon.png';
import domesticIcon from '../../../assets/img/icons/domestic-icon.png';
import electricityIcon from '../../../assets/img/icons/electricity-icon.png';



const SideNav = () => {
    const [toggle, setToggle] = useState(false);

    const location = useLocation();
    const path = location.pathname;

    console.log(path)

    return (
        <>
        <div className="sidenav-toggle" onClick={() => setToggle(!toggle)}>
            <i className="fa fa-list"></i>
        </div>
        {/* <div className={"page-wrapper-show"} style={toggle ? {'opacity' : 0.6} : {}}></div> */}
        <div className={toggle ? "sidenav sidenav-show" : "sidenav"}>
            <div className="back-opacity">
            <Link to="/" className="logo-wrapper">
                <img src={LogoImg} alt="M-Cash Logo"/>
                <div>M - CASH</div>
            </Link>
            <div className="menu-wrapper">
                <ul className="menu">
                    <li className={path === '/about' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={aboutIcon} alt="nav-icon" />
                            </div>
                        </div>
                        <Link to="/about" onClick={() => setToggle(false)}>WHO WE ARE</Link>
                    </li>
                    <li className={path === '/product' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={domesticIcon} alt="nav-icon" />
                            </div>
                        </div>
                        <Link to="/product" onClick={() => setToggle(false)}>OUR PRODUCTS</Link>
                    </li>
                    <li className={path === '/network' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={airtimeIcon} alt="nav-icon" />  
                            </div>
                        </div>
                        <Link to="/network" onClick={() => setToggle(false)}>AGENT NETWORK</Link>
                    </li>
                    <li className={path === '/support' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={supportIcon} alt="nav-icon" />
                            </div>
                        </div>
                        <Link to="/support" onClick={() => setToggle(false)}>HELP & SUPPORT</Link>
                    </li>
                    <li className={path === '/profile' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={accountIcon} alt="nav-icon" />
                            </div>
                        </div>
                        <Link to="/profile" onClick={() => setToggle(false)}>MY PROFILE</Link>
                    </li>
                    <li className={path === '/profile2' || path === '/profile2/electricity' || path === '/profile2/airtime' || path === '/profile2/domestic' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={accountIcon} alt="nav-icon" />
                            </div>
                        </div>
                        <Link to="/profile2" onClick={() => setToggle(false)}>MY PROFILE 2 </Link>
                    </li>
                    <li className={path === '/newsroom' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={electricityIcon} alt="nav-icon" />
                            </div>
                        </div>
                        <Link to="/newsroom" onClick={() => setToggle(false)}>NEWSROOM</Link>
                    </li>
                    <li className={path === '/faq' ? "menu-item active" : "menu-item"}>
                        <div className="img-wrap">
                            <div className="indicator"></div>
                            <div className="img-black-icon">
                                <img src={accountIcon} alt="nav-icon" />
                            </div>
                        </div>
                        <Link to="/faq" onClick={() => setToggle(false)}>FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className="social-wrapper">
                <a href="https://www.facebook.com" className="social-icon-wrap">
                    <img src={fb} alt="social" />
                </a>
                <a href="https://www.instagram.com" className="social-icon-wrap">
                    <img src={it} alt="social" />
                </a>
                <a href="https://www.twitter.com" className="social-icon-wrap">
                    <img src={tw} alt="social" />
                </a>
                <a href="https://www.linkedin.com" className="social-icon-wrap">
                    <img src={li} alt="social" />
                </a>
            </div>
            </div>
        </div>
        </>
    )
}

export default SideNav;
