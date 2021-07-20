import React, {Component} from 'react'
import YouTube from 'react-youtube';

class Newsroom extends Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    _onError(err) {
        console.log(err)
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (
            <div className="page newsroom">
                <div className="container">
                    <div className="wrapper">
                        <div className="featured-image">
    
                        </div>
                        <div className="inner-content">
                            <div className="description">
                                <div className="title">NEWS ROOM</div>
                                Ehenis qui aut et omnis vel et, nonsequam, quis res percias susantis erro everit lab in nis inctur alique porupta sequos aperi tecatur? Ad qui tecese si ut eatestotatio beritius dolor archilibus volores equidest lab iusa pla vention essimus.

                                Mo tet electio nsequis as asperferum quias re, quae nustotas as aut hariaepta volorruntio quibus a in cus dolupid quiae quaepellore non ne debit doluptae mini dolor re non conet vel molo odit, tecabor iberspe dionsed molorempore latempeliqui officati sus simusant eiciendit et atquuntis eum rectaquam suntion pe nostio ommo es expliquo invel mi, tempeli gendand andipsaes mod quatum quam dolorepere, aut quias nem faccum volorep erferit velis reped ut idellam, cum simo dit aut esequatis quam alis autem Ehenis qui aut et omnis vel et, nonsequam, quis res percias susantis erro everit lab in nis inctur alique porupta sequos aperi tecatur? Ad qui tecese si ut eatestotatio beritius dolor archilibus volores equidest lab iusa pla vention essimus.

                                Mo tet electio nsequis as asperferum quias re, quae nustotas as aut hariaepta volorruntio quibus a in cus dolupid quiae quaepellore non ne debit doluptae mini dolor re non conet vel molo odit, tecabor iberspe dionsed molorempore latempeliqui officati sus simusant eiciendit et atquuntis eum rectaquam suntion pe nostio ommo es expliquo invel mi, tempeli gendand andipsaes mod quatum quam dolorepere, aut quias nem faccum volorep erferit velis reped ut idellam, cum simo dit aut esequatis quam alis autem Ehenis qui aut et omnis vel et, nonsequam, quis res percias susantis erro everit lab in nis inctur alique porupta sequos aperi tecatur? Ad qui tecese si ut eatestotatio beritius dolor archilibus volores equidest lab iusa pla vention essimus.

                                Mo tet electio nsequis as asperferum quias re, quae nustotas as aut hariaepta volorruntio quibus a in cus dolupid quiae quaepellore non ne debit doluptae mini dolor re non conet vel molo odit, tecabor iberspe dionsed molorempore latempeliqui officati sus simusant eiciendit et atquuntis eum rectaquam suntion pe nostio ommo es expliquo invel mi, tempeli gendand andipsaes mod quatum quam dolorepere, aut quias nem faccum volorep erferit velis reped ut idellam, cum simo 
                                
                                dit Ehenis qui aut et omnis vel et, nonsequam, quis res percias susantis erro everit lab in nis inctur alique porupta sequos aperi tecatur? Ad qui tecese si ut eatestotatio beritius dolor archilibus volores equidest lab iusa pla vention essimus.
                                

                                Mo tet electio nsequis as asperferum quias re, quae nustotas as aut hariaepta volorruntio quibus a in cus dolupid 
                                quiae quaepellore non ne debit doluptae mini dolor re non conet vel molo odit, tecabor iberspe dionsed molorempore
                                 latempeliqui officati sus simusant eiciendit et atquuntis eum rectaquam suntion pe nostio ommo es expliquo invel mi, tempeli gendand andipsaes mod quatum quam dolorepere, aut quias nem faccum volorep erferit 
                            </div>
                            <div className="youtube">
                                <YouTube 
                                    videoId="2g811Eo7K8U"
                                    opts={opts} 
                                    onReady={this._onReady}
                                    onError={this._onError} 
                                    width={'100%'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsroom;