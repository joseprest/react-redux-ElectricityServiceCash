import React, {Component} from 'react'

class Faq extends Component {
    constructor() {
        super();

        this.state = {
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false,
            tab7: false
        }
    }

    handleTabClick(index) {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false,
            tab7: false
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

        if(index === 7) {
            this.setState({tab7:true});
        }
    }

    render() {
        const {tab1, tab2, tab3, tab4, tab5, tab6, tab7} = this.state;

        return (
            <div className="page faq">
                <div className="container">
                    <div className="wrapper">
                        <div className="featured-image">
    
                        </div>
                        <div className="inner-content">
                            <div className="title">FREQUENTLY ASKED QUESTIONS</div>
                            <div className="tap-wrap">
                                <div className={tab1 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(1)}>
                                    <div>M-CASH</div>
                                </div>
                                <div className={tab2 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(2)}>
                                    <div>CASH-OUT/CASH-IN</div>
                                </div>
                                <div className={tab3 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(3)}>
                                    <div>DOMESTIC MONEY TRANSFER(M-CASH Wallet)</div>
                                </div>
                                <div className={tab4 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(4)}>
                                    <div>MONEYGRAM</div>
                                </div>
                                <div className={tab5 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(5)}>
                                    <div>AIRTIME</div>
                                </div>
                                <div className={tab6 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(6)}>
                                    <div>ELECTRICITY / WATER</div>
                                </div>
                                <div className={tab7 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(7)}>
                                    <div>LOCATIONS</div>
                                </div>
                            </div>
                            <div className="tab-content">
                                {
                                    tab1 ?  <div className="tab-content-wrap">
                                                <div className="answer">
                                                    <div className="subtitle">What is M-CASH?</div>
                                                    M-CASH is an electronic payment alternative The M-CASH product is available in the form of a mobile wallet accessed via USSD and it enables a user to:

                                                    <ul>
                                                        <li>Load funds onto their mobile wallet,</li>
                                                        <li>Withdraw funds from their mobile wallet,</li>
                                                        <li>Send money to any other mobile number locally,</li>
                                                        <li>Receive money from any mobile number locally,</li>
                                                        <li>uy prepaid airtime or electricity and,	Pay for goods and services (via sending money from one phone to another)</li>
                                                    </ul>

                                                    <div className="emphasis">Ullist, aliquassus. Pudisquidus ra velicie</div>
                                                    ndipiendit aliatasit que di doloresenis nimus.
                                                    Aximendi rerae lab in numquae ctemodis ium eni utemolo te aut dercias quiant, quiduciet apicima ximaxim endisciae et volorep eliquia aut et ea conest haria nulluptinci conseque nat ad etur, solupta velit, untor sam illorrovitem archilia et pre volles soles sequi del int voloreius enimenit dunt et acerchillis aut qui di offici tem nim hiliquat.
                                                    Del eos ut aut labore e

                                                    <div className="emphasis">um re vent odit, simagnim </div>
                                                    facia quis alitatur repe voluptasim quam volum repta dolore arum lat fugiaes temporumquas aditis simus minctatius rent, tet utem fuga. Aciis sinciendit ommos ut laboren ihitate cusa sam adit eum, simod ma ide nos aliquia taspel minciant officidendis aligent.

                                                    <div className="emphasis">Omnisquam dem cupta inctiis eat </div>
                                                    quaeprem el il id eiusam quo escimil ipsae consed exerio quis ea nulloressim faccum fuga. Apelliq uaturitas cum qui ut verrunt quiaepe disquias iur aut mo od qui beritatis modi sim es il 

                                                    magnisc illore, eos porionse officiaeped molorepudit fugitibus, sequi quam, to te perumquis eiusant ea con cus iuntus dolorio stotatiorem ra sitatium quuntia nis ium faciate pre pliquis postius, con nulpa voluptio into ipsaecumet et moluptiatem et que rae. Ovit omnis erum et qui alique ani rerit i

                                                    <div className="emphasis">ma porporunture lam quo </div>
                                                    quatquo con comnihit, siminve lenimus vererfera cuptat molut porume velis ea iduciam ipienda vit aute poressit fuga. Nimodisci adistius. Magnist, 

                                                    officto rrovid et pro modianisciet re si qui nessit laceatatur autatet pra volorepratat aut andest escimustis esecae eaquati orest, conseri del event dolo oditaque nimagni magnat quibusam aut dolor
                                                </div>
                                            </div> : null
                                }
                                {
                                    tab2 ?  <div className="tab-content-wrap">
                                                tab 2 content
                                            </div> : null
                                }
                                {
                                    tab3 ?  <div className="tab-content-wrap">
                                                tab 3 content
                                            </div> : null
                                }
                                {
                                    tab4 ?  <div className="tab-content-wrap">
                                                tab 4 content
                                            </div> : null
                                }
                                {
                                    tab5 ?  <div className="tab-content-wrap">
                                                tab 5 content
                                            </div> : null
                                }
                                {
                                    tab6 ?  <div className="tab-content-wrap">
                                                tab 6 content
                                            </div> : null
                                }
                                {
                                    tab7 ?  <div className="tab-content-wrap">
                                                tab 7 content
                                            </div> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;