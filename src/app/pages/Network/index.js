import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Network extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    render() {

        return (
            <div className="page network">
                <div className="container">
                    <div className="wrapper">
                        <div className="featured-image">
    
                        </div>
                        <div className="inner-content">
                            <div className="agent-wrap">
                                <div className="title">
                                    AGENT NETWORK
                                </div>
                                <div className="content">
                                Eperum si ad ut ellis consed quiae. Epelitiost, venienes est, que nati tem. Onem sam inciam, solest pe ped molectiis nonsentota qui optatiorumipit, ut est ute omnis dolupicit facepuda ad minum voluptatur ma doluptae de am sint.
                                </div>
                                <div className="agent-list">
                                    <div className="agent-item">
                                        <a href="/">WINDHOEK</a>
                                    </div>
                                    <div className="agent-item disabled">
                                        <a href="/">AUSSPANNPALTZ</a>
                                    </div>
                                    <div className="agent-item disabled">
                                        <a href="/">KAISER KRONE</a>
                                    </div>
                                    <div className="agent-item disabled">
                                        <a href="/">MARUA MALL</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">HOSEA KUTAKO INTERNATIONAL</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">AIRPORT</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">SWAKOPMUND</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">WALVIS BAY</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">WALVIS BAY PORT</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">OUTJO</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">ONGWEDIVA</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">OSHIKANGO</a>
                                    </div>
                                    <div className="agent-item">
                                        <a href="/">RUNDU</a>
                                    </div>
                                </div>
                            </div>
                            <div className="google-map-wrap">
                                <div style={{ height: '100vh', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: '******' }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    >
                                        <AnyReactComponent
                                            lat={59.955413}
                                            lng={30.337844}
                                            text="My Marker"
                                        />
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Network;
