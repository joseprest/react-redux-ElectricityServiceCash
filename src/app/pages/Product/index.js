import React, {Component} from 'react'

import salesTeam from "../../../assets/img/sales-team.png"

class Product extends Component {
    constructor() {
        super();

        this.state = {
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false,
            tab6: false,
            tab7: false,
            tab8: false
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
            tab7: false,
            tab8: false
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

        if(index === 8) {
            this.setState({tab8:true});
        }
    }

    render() {
        const {tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8} = this.state;

        return (
            <div className="page product">
                <div className="container">
                    <div className="wrapper">
                        <div className="featured-image">
    
                        </div>
                        <div className="inner-content">
                            <div className="tap-wrap">
                                <div className={tab1 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(1)}>
                                    <div>CASH-IN</div>
                                </div>
                                <div className={tab2 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(2)}>
                                    <div>CASH-OUT</div>
                                </div>
                                <div className={tab3 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(3)}>
                                    <div>DOMESTIC MONEY TRANSFER</div>
                                </div>
                                <div className={tab4 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(4)}>
                                    <div>MONEYGRAM</div>
                                </div>
                                <div className={tab5 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(5)}>
                                    <div>PREPAID AIRTIME</div>
                                </div>
                                <div className={tab6 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(6)}>
                                    <div>POST-PAID AIRTIME</div>
                                </div>
                                <div className={tab7 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(7)}>
                                    <div>PREPAID ELECTRICITY</div>
                                </div>
                                <div className={tab8 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(8)}>
                                    <div>WATER</div>
                                </div>
                            </div>
                            <div className="tab-content">
                                {
                                    tab1 ?  <div className="tab-content-wrap">
                                                tab 1 content
                                            </div> : null
                                }
                                {
                                    tab2 ?  <div className="tab-content-wrap">
                                                tab 2 content
                                            </div> : null
                                }
                                {
                                    tab3 ?  <div className="tab-content-wrap">
                                                <div className="blog">
                                                    <div>DOMESTIC MONEY TRANSFER</div>
                                                    Eperum si ad ut ellis consed quiae. Epelitiost, venienes est, que nati tem. Onem sam inciam, solest pe ped molectiis nonsentota qui optatiorumipit, ut est ute omnis dolupicit facepuda ad minum voluptatur ma doluptae de am sint.t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum qusant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion sequib eriatur?t molecae nihit, tes aliqu eriatur? Pides es maximpori iunditata si qui odis et, volendam enis dipiet qui duciis eossum ratis sit, que vendae nost, sit occatus mos doloratecto quam sinus am voluptat ut essit, saperias vellatumque perem vendiss itatqui re nobit fuga. Itat. Ape nimodipsae

                                                </div>
                                                <div className="picture">
                                                    <img src={salesTeam} alt="sales team" />
                                                </div>
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
                                {
                                    tab8 ?  <div className="tab-content-wrap">
                                                tab 8 content
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

export default Product;