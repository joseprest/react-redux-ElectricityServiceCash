import React, {Component} from 'react'

import boardMembers from "../../../assets/img/tab-content.png"
import salesTeam from "../../../assets/img/sales-team.png"

class About extends Component {
    constructor() {
        super();

        this.state = {
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false
        }
    }

    handleTabClick(index) {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: false
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
    }

    render() {
        const {tab1, tab2, tab3, tab4, tab5} = this.state;

        return (
            <div className="page about">
                <div className="container">
                    <div className="wrapper">
                        <div className="featured-image">
    
                        </div>
                        <div className="inner-content">
                            <div className="tap-wrap">
                                <div className={tab1 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(1)}>
                                    <div>BOARD</div>
                                </div>
                                <div className={tab2 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(2)}>
                                    <div>SALES TEAM</div>
                                </div>
                                <div className={tab3 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(3)}>
                                    <div>BACKGROUND</div>
                                </div>
                                <div className={tab4 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(4)}>
                                    <div>VALUES</div>
                                </div>
                                <div className={tab5 ? "tab-icon active" : "tab-icon"} onClick={() => this.handleTabClick(5)}>
                                    <div>CULTURE</div>
                                </div>
                            </div>
                            <div className="tab-content">
                                {
                                    tab1 ?  <div className="tab-content-wrap">
                                                <div className="pic-wrap">
                                                    <img src={boardMembers} alt="tab-content" />
                                                </div>
                                                <div className="blog-wrap">
                                                    <div>BOARD MEMBERS</div>
                                                    nullibus eatiore mporem dus, aboremp orectat endunt faccum aut dolenimod ut molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que olupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus dolupt ate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata
                                                </div>
                                            </div> : null
                                }
                                {
                                    tab2 ?  <div className="tab-content-wrap">
                                                <div className="pic-wrap">
                                                    <img src={salesTeam} alt="tab-content" />
                                                </div>
                                                <div className="blog-wrap">
                                                    <div>SALES TEAM</div>
                                                    nullibus eatiore mporem dus, aboremp orectat endunt faccum aut dolenimod ut molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que olupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus dolupt ate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata doloris sus sunt pe am quodion sequam, cum lat omni natiosant quate porepe liqui conse enimus doluptate pellacit omniate nullaut eum que volupti bustion esequib eriatur?t molecae nihit, tes aliquuntor susam la delic to consece rspidebit re voluptatem is aut hic temcum autata
                                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;