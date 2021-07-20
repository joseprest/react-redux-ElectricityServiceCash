import React, {Component} from 'react'
import profile from '../../../assets/img/profile.png'
import pageBackground from '../../../assets/img/people.png'

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false
        }
    }

    handleTabClick(index) {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false
        });

        if(index === 1) {
            this.setState({tab1:true});
        }

        if(index === 2) {
            this.setState({tab2:true});
        }

        if(index === 3) {
            this.setState({tab3:true});
        }

        if(index === 4) {
            this.setState({tab4:true});
        }

        if(index === 5) {
            this.setState({tab5:true});
        }

        if(index === 6) {
            this.setState({tab6:true});
        }
    }

    componentDidMount() {
        const { match: {params: {tab}} } = this.props;

        console.log(tab)

        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false
        });

        if(tab === 'electricity') {
            this.setState({
                tab1: true
            });
        }

        if(tab === 'airtime') {            
            this.setState({
                tab2: true
            });
        }

        if(tab === 'domestic') {
            this.setState({
                tab3: true
            });
        }
    }

    render() {
        const {tab1, tab2, tab3, tab4, tab5, tab6} = this.state;

        return (
            <div className="page profile1">
                <div className="container">
                    <div className="wrapper">
                        <div className="featured-image">
    
                        </div>
                        <div className="inner-content">
                            <div className="profile-info-wrap">
                                <div className="title">MY PROFILE</div>
                                <div className="profile-info">
                                    <div className="profile-picture">
                                        <img src={profile} alt="profile" />
                                    </div>
                                    <div className="information">
                                        <div className="subtitle">Information</div>
                                        <div className="label">My Profile Name</div>
                                        <div className="description">John Blompt</div>
                                        <hr />
                                        <div className="label">Status</div>
                                        <div className="description">Active</div>
                                        <hr />
                                        <div className="label">Email</div>
                                        <div className="description email-decoration">Johnblompt@gmail.com</div>
                                        <hr />
                                        <div className="label">My M-CASH wallet balance</div>
                                        <div className="description">N$105,893.05 <span className="history">(View History)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-dashboard-wrap">
                                <div className="subtitle">DASHOBOARD</div>
                                <div className="content">
                                    <div className="tap-wrap">
                                        <div className={tab1 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(1)}>
                                            <div>Electricity</div>
                                        </div>
                                        <div className={tab2 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(2)}>
                                            <div>AIRTIME</div>
                                        </div>
                                        <div className={tab3 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(3)}>
                                            <div>DOMESTIC MONEY TRANSFER(M-CASH Wallet)</div>
                                        </div>
                                        <div className={tab4 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(4)}>
                                            <div>CHANGE PIN</div>
                                        </div>
                                        <div className={tab5 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(6)}>
                                            <div>Settings</div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        {
                                            tab1 ?  <div className="electricity">
                                                <div className="title">
                                                    ELECTRICITY
                                                </div>
                                                <div className="electricity-content">
                                                    <form>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Service provider:
                                                            </div>
                                                            <div className="form-input">
                                                                <select>
                                                                    <option>Select</option>
                                                                    <option>NORED</option>
                                                                    <option>Erongo RED</option>
                                                                    <option>CENORED</option>
                                                                    <option>City of Windhoek</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Select Wallet:
                                                            </div>
                                                            <div className="form-input">
                                                                <select>
                                                                    <option>M-CASH Wallet</option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Amount:
                                                            </div>
                                                            <div className="form-input">
                                                                <select>
                                                                    <option>20.00</option>
                                                                    <option>15.00</option>
                                                                    <option>10.00</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Payment Method:
                                                            </div>
                                                            <div className="form-input">
                                                                <select>
                                                                    <option>Credit or Debit Card</option>
                                                                    <option>Wallet</option>
                                                                    <option>EFT</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                
                                                            </div>
                                                            <div className="form-input">
                                                                <button type="submit">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="page-background">
                                                        <img src={pageBackground} alt="page background" />
                                                    </div>
                                                </div>
                                            </div> : null
                                        }
                                        {
                                            tab2 ?  <div className="airtime">
                                                        <div className="title">
                                                            AIRTIME
                                                        </div>
                                                        <div className="airtime-content">
                                                            <form>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Service provider:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <select>
                                                                            <option>Select</option>
                                                                            <option>MTC</option>
                                                                            <option>Telecom Namibia</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Mobile Number:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <input type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Payment Type:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <select>
                                                                            <option>Prepaid</option>
                                                                            <option>Postpaid</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Amount:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <select>
                                                                            <option>20.00</option>
                                                                            <option>15.00</option>
                                                                            <option>10.00</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Payment Method:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <select>
                                                                            <option>Credit or Debit Card</option>
                                                                            <option>Wallet</option>
                                                                            <option>EFT</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <button type="submit">Process</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="page-background">
                                                                <img src={pageBackground} alt="page background" />
                                                            </div>
                                                        </div>
                                                    </div> : null
                                        }
                                        {
                                            tab3 ?  <div className="airtime">
                                                        <div className="title">
                                                            DOMESTIC MONEY TRANSFERS
                                                        </div>
                                                        <div className="airtime-content">
                                                            <form>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Mobile Number:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <input type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Amount:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <select>
                                                                            <option>20.00</option>
                                                                            <option>15.00</option>
                                                                            <option>10.00</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Payment Method:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <select>
                                                                            <option>Credit or Debit Card</option>
                                                                            <option>Wallet</option>
                                                                            <option>EFT</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <button type="submit">Process</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="page-background">
                                                                <img src={pageBackground} alt="page background" />
                                                            </div>
                                                        </div>
                                                    </div> : null
                                        }
                                        {
                                            tab4 ?  <>
                                                    change pin
                                                    </> : null
                                        }
                                        {
                                            tab5 ?  <>
                                                    settings
                                                    </> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;