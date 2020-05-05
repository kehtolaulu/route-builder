import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '700px',
    height: '700px'
};

const containerStyle = {
    width: '700px',
    height: '700px'
}

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
                { lat: 55.6132, lng: 51.8470 }
            ],
            center: {}
        };
    }

    onCenterChanged = (mapProps, map) => {
        debugger
        let lat = map.center.lat();
        let lng = map.center.lng();
        this.setState({ center: { lat, lng } });
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={11}
                style={mapStyles}
                containerStyle={containerStyle}
                initialCenter={{
                    lat: 55.6132,
                    lng: 51.8470
                }}
                onCenterChanged={this.onCenterChanged}
            >
                {this.state.markers.map(marker =>
                    <Marker
                        position={{ lat: marker.lat, lng: marker.lng }}
                    />)}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDrM-9kfb01hw-cavjmBiAzo4tDZPbUD6M'
})(MapContainer);
