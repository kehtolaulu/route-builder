import React from 'react';
import Markers from './Markers';
import MapContainer from './MapContainer';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="map-container">
                    <MapContainer
                        markers={this.props.markers}
                        lineCoordinates={this.props.markers.map(marker => marker.position)}
                    />
                </div>
                <Markers />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    markers: state.markers
});

export default connect(mapStateToProps)(App);
