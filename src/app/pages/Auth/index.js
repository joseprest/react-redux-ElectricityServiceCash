const Auth = () => {
    return (
        <div className="page auth">
            <div className="container">
                <div className="wrapper">
                    <div className="auth-form login">
                        <form action="">
                            <div className="field-wrapper">
                                <div className="form-group md-5">
                                    <label htmlFor="">Mobile Number</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-5">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-2">
                                    <input type="submit" className="btn-mc" value="Log In"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="divider"></div>
                    <div className="auth-form register">
                        <div className="auth-help-text">
                            <div className="help-text">
                                <h3>Sign up with Namivia's #1 Online Provider here!!!</h3>
                                <h5>If you need a consultant to assit you, please click here.</h5>
                            </div>
                            <div className="help-click">
                                <button className="btn-mc">PLEASE CALL ME</button>
                            </div>
                        </div>
                        <form action="">
                            <div className="field-wrapper">
                                <div className="form-group md-3">
                                    <label htmlFor="">First name</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-3">
                                    <label htmlFor="">Middle name</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-3">
                                    <label htmlFor="">Last name</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>

                            </div>
                            <div className="field-wrapper">
                                <div className="form-group md-3">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-3">
                                    <label htmlFor="">Mobile Number</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-3">
                                    <label htmlFor="">ID or Passport Number</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <div className="form-group md-3">
                                    <label htmlFor="">Electricity Provider</label>
                                    <input type="email" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-3">
                                    <label htmlFor="">Electricity Meter Number</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-3">
                                    <label htmlFor="">ID or Passport Number</label>
                                    <input type="text" className="input-mc-primary"/>
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <div className="form-group md-3">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="input-mc-primary"/>
                                </div>

                                <div className="form-group md-3">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" className="input-mc-primary"/>
                                </div>
                                <div className="form-group md-3">
                                    
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <div className="form-group terms">
                                    <input type="checkbox" /><span>I have read and understood T&C's</span>
                                </div>
                                <div className="form-group md-2">
                                    <input type="submit" className="btn-mc" value="Sign Up"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;