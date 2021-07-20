import React, {Component} from 'react'

class Support extends Component {
    render() {

        return (
            <div className="page support">
                <div className="container">
                    <div className="wrapper">
                        <div className="featured-image">
    
                        </div>
                        <div className="inner-content">
                            <div className="help-support">
                                <div className="title">HELP & SUPPORT</div>
                                <div className="contact-center">
                                    <div className="number-tip">Toll free Contact Centre:</div>
                                    <div className="number">081 9400 (toll free)</div>
                                </div>
                                <div className="tip">
                                    Should you have any enquiries, please call us on our toll free number.
                                </div>
                            </div>     
                            <div className="support-form">
                                <div className="tip1">Send us your Feedback:</div>
                                <div className="tip2">Leave a quick message and we will contact you on receipt.</div>
                                <div className="form-wrap">
                                    <div className="form-group">
                                        <div className="label">Full Name:</div>
                                        <div className="form-control">
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Mobile:</div>
                                        <div className="form-control">
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Email:</div>
                                        <div className="form-control">
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Country:</div>
                                        <div className="form-control">
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Town:</div>
                                        <div className="form-control">
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Comments:</div>
                                        <div className="form-control">
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>     
                            <div className="nothing">

                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Support;