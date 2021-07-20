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

    render() {
        const {tab1, tab2, tab3, tab4, tab5, tab6} = this.state;

        return (
            <div className="page profile">
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
                                            <div>CASH-IN</div>
                                        </div>
                                        <div className={tab2 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(2)}>
                                            <div>CASH-OUT</div>
                                        </div>
                                        <div className={tab3 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(3)}>
                                            <div>DOMESTIC MONEY TRANSFER(M-CASH Wallet)</div>
                                        </div>
                                        <div className={tab4 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(4)}>
                                            <div>MONEYGRAM</div>
                                        </div>
                                        <div className={tab5 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(5)}>
                                            <div>Value Added Services</div>
                                        </div>
                                        <div className={tab6 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(6)}>
                                            <div>Settings</div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        {
                                            tab1 ?  <div className="tab-content-wrap">
                                                        <div className="sub-tabs-wrap">
                                                            <div className="sub-tab">
                                                                <div className="sub-tab-item">
                                                                    Transaction History
                                                                </div>
                                                            </div>
                                                            <div className="sub-tab">
                                                                <div className="sub-tab-item">
                                                                    Transaction History
                                                                </div>
                                                                <div className="sub-tab-item">
                                                                    Last Transactions
                                                                </div>
                                                                <div className="sub-tab-item">
                                                                    Request Print Version
                                                                </div>
                                                            </div>
                                                            <div className="sub-tab">
                                                                <div className="sub-tab-item">
                                                                    Send
                                                                </div>
                                                            </div>
                                                            <div className="sub-tab">
                                                                <div className="sub-tab-item">
                                                                    Send
                                                                </div>
                                                                <div className="sub-tab-item">
                                                                    Receive
                                                                </div>
                                                            </div>
                                                            <div className="sub-tab">
                                                                <div className="sub-tab-item">
                                                                    Pre-Paid Airtime
                                                                </div>
                                                                <div className="sub-tab-item">
                                                                    Post Paid
                                                                </div>
                                                                <div className="sub-tab-item">
                                                                    Electricity
                                                                </div>
                                                                <div className="sub-tab-item">
                                                                    Water
                                                                </div>
                                                            </div>
                                                            <div className="sub-tab">
                                                                <div className="sub-tab-item">
                                                                    Beneficiary Manager
                                                                </div>
                                                                <div className="sub-tab-item">
                                                                    Change Pin
                                                                </div>
                                                            </div>
                                                        </div>
                                            </div> : null
                                        }
                                        {
                                            tab2 ?  <div className="cash-out">
                                                        <div className="title">
                                                            CASH-OUT
                                                        </div>
                                                        <div className="cash-out-content">
                                                            <form>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Debit Account:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <input type="text" defaultValue="M-CASH Wallet" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-inline">
                                                                    <div className="label">
                                                                        Amount:
                                                                    </div>
                                                                    <div className="form-input">
                                                                        <input type="text" />
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
                                            tab3 ?  <>
                                                    <div className="domestic-title">DOMESTIC MONEY TRANSFERS - SEND</div>
                                                    <div className="tab-content-wrap">
                                                        <div className="domestic-content">
                                                            <form>
                                                                <div className="wallet">
                                                                    <div className="form-inline">
                                                                        <div className="">Select Wallet:</div>
                                                                        <div className="form-input">
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-inline">
                                                                        <div className="">Amount:</div>
                                                                        <div className="form-input">
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="beneficiary">
                                                                    <div className="form-inline">
                                                                        <div className="">Select Beneficiaries:</div>
                                                                        <div className="form-input">
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-inline">
                                                                        <div className="">Beneficiaries (Send to all):</div>
                                                                        <div className="form-input">
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                    <button type="submit">Submit</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    </> : null
                                        }
                                        {
                                            tab4 ?  <>
                                                    <div className="wallet-pin-title">CHANGE WALLET PIN</div>
                                                    <div className="wallet-pin">
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Old PIN:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                NEW PIN:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                CONFIRM NEW PIN:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                OTP:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="submit-inline">
                                                            <button>Verify</button>
                                                            <button>Submit</button>
                                                        </div>
                                                    </div></> : null
                                        }
                                        {
                                            tab5 ?  <>
                                                    <div className="value-added-title-sub">Value Added Servicies: Pre-Paid Airtime</div>
                                                    <div className="value-added-title">PRE-PAID AIRTIME</div>
                                                    <div className="tab-content-wrap">
                                                        <div className="value-content">
                                                            <form>
                                                                <div className="wallet">
                                                                    <div className="form-inline">
                                                                        <div className="label">Service provider:</div>
                                                                        <div className="form-input">
                                                                            <select>
                                                                                <option>Select</option>
                                                                                <option>MTC</option>
                                                                                <option>Telecom Namibia</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-inline">
                                                                        <div className="label">Select Wallet:</div>
                                                                        <div className="form-input">
                                                                            <select>
                                                                                <option>M-CASH Wallet</option>
                                                                                <option>Prepaid</option>
                                                                                <option>Postpaid</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-inline">
                                                                        <div className="label">Amount:</div>
                                                                        <div className="form-input">
                                                                            <select>
                                                                                <option>20.00</option>
                                                                                <option>15.00</option>
                                                                                <option>10.00</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="beneficiary">
                                                                    <div className="form-inline">
                                                                        <div className="label">Top up my mobile number</div>
                                                                        <div className="form-input">
                                                                            <input type="password" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-inline">
                                                                        <div className="label">Top up another mobile number</div>
                                                                        <div className="form-input">
                                                                            <input type="password" />
                                                                        </div>
                                                                    </div>
                                                                    <button type="submit">Submit</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    </> : null
                                        }
                                        {
                                            tab6 ?  <>
                                            <form>
                                            <div className="tab-content-wrap settings">
                                                <div className="beneficiary-management">
                                                    <div className="tab-content-title">Beneficiary Management</div>
                                                    <div className="beneficiary-wrap">
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Full Names and Surname:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Full Names and Surname:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Full Names and Surname:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Full Names and Surname:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Full Names and Surname:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Full Names and Surname:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Full Names and Surname:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="beneficiary-mobile">
                                                    <div className="tab-content-title">Beneficiary Mobile</div>
                                                    <div className="beneficiary-wrap">
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Mobile:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Mobile:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Mobile:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Mobile:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Mobile:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Mobile:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-inline">
                                                            <div className="label">
                                                                Mobile:
                                                            </div>
                                                            <div className="form-input">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="beneficiary-description">
                                                <div className="description">
                                                    (I have read and understood the terms and conditions mentioned overleaf and unconditionally accept them as binding on me. I have understood all the rates, tariffs and other related conditions. I further declare and undertake that the above information provided by me is true and correct in all aspects.)
                                                </div>
                                                <div className="btn-group">
                                                    <button>Edit/Add</button>
                                                    <button>Submit</button>
                                                </div>
                                            </div>
                                            </form>
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