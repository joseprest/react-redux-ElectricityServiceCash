import {Link} from 'react-router-dom';
import supportIcon from '../../../assets/img/icons/support-icon.png';
import aboutIcon from '../../../assets/img/icons/about-icon.png';
import accountIcon from '../../../assets/img/icons/account-icon.png';
import airtimeIcon from '../../../assets/img/icons/airtime-icon.png';
import domesticIcon from '../../../assets/img/icons/domestic-icon.png';
import electricityIcon from '../../../assets/img/icons/electricity-icon.png';
import logoIcon from '../../../assets/img/icons/logo-icon.png';

const Home = () => {
    return (
        <div className="page home">
            <div className="container">
                <div className="wrapper">
                    <nav>
                        <div className="menu-wrapper">
                            <Link to="/profile2/electricity">
                                <div><img src={electricityIcon} alt="M-Cash"/></div>
                                <div className="menu-item-title">
                                    <span className="menu-item-underline">ELECTRICITY & WATER</span>
                                </div>
                            </Link>
                            <Link to="/profile2/airtime">
                                <div><img src={airtimeIcon} alt="M-Cash" /></div>
                                <div className="menu-item-title">
                                    <span className="menu-item-underline">
                                        AIRTIME
                                    </span>
                                </div>
                            </Link>
                            <Link to="/profile2/domestic">
                                <div><img src={domesticIcon} alt="M-Cash" /></div>
                                <div className="menu-item-title">
                                    <span className="menu-item-underline">DOMESTIC MONEY TRANSFER</span>
                                </div>
                            </Link>
                            <Link to="/faq" className="logo">
                                <div><img src={logoIcon} alt="M-Cash" /></div>
                                <div className="menu-item-title-logo">
                                </div>
                            </Link>
                            <Link to="/support">
                                <div><img src={supportIcon} alt="M-Cash" /></div>
                                <div className="menu-item-title">
                                    <span className="menu-item-underline">HELP & SUPPORT</span>
                                </div>
                            </Link>
                            <Link to="/profile">
                                <div><img src={accountIcon} alt="M-Cash" /></div>
                                <div className="menu-item-title">
                                    <span className="menu-item-underline">MY ACCOUNT</span>
                                </div>
                            </Link>
                            <Link to="/about">
                                <div><img src={aboutIcon} alt="M-Cash" /></div>
                                <div className="menu-item-title">
                                    <span className="menu-item-underline">ABOUT US</span>
                                </div>
                            </Link>
                        </div>
                        <div className="menu-description">
                            <div className="desc1">NAMIBIA’S FIRST ONLINE PROVIDER</div>
                            <div className="desc2">SIMPLIFY YOUR LIFE AND TAKE 5 MINS TO MAKE ONLINE TRANSACTING SIMPLE. </div>
                            <div className="desc3">ONCE OFF REGISTRATION </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Home;