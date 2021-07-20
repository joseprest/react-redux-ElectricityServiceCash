import splashIcon from '../../../assets/img/icons/splash-icon.png';  

const Splash = () => {
    return (
        <div className="page splash">
            <div className="container">
                <div className="inner-content">
                    <div className="wrapper">
                        <div className="text">
                            <div className="text1">SIMPLY DIAL</div>
                            <div className="text2">*140*400#</div>
                            <div className="text3">...TO SEND MONEY TO FRIENDS AND FAMILY AND A LOT MORE</div>
                        </div>
                        <div className="logo">
                            <img alt="splash logo" src={splashIcon} />
                        </div>
                    </div>
                    <div className="loading-wrap">
                        <div className="loading">
                            <div className="loading-bar">
                                <div className="loading-cube1"></div>
                                <div className="loading-cube1"></div>
                                <div className="loading-cube2"></div>
                                <div className="loading-cube3"></div>
                                <div className="loading-cube3"></div>
                                <div className="loading-cube3"></div>
                                <div className="loading-cube4"></div>
                                <div className="loading-cube4"></div>
                                <div className="loading-cube4"></div>
                                <div className="loading-cube4"></div>
                            </div>
                            <div className="loading-text">
                                LOADING...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Splash;