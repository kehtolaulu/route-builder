import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

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
            open: null
        };
    }

    showName = (index) => {
        this.setState({ open: index });
    }

    hideName = () => {

    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={11}
                style={mapStyles}
                containerStyle={containerStyle}
                initialCenter={this.props.center}
                onCenterChanged={this.props.onCenterChanged}
            >
                {(this.props.markers || []).map(marker => {
                    return (
                        <Marker
                            key={marker.id}
                            name={marker.name}
                            onDragend={(t, map, coord) => this.props.onMarkerDragEnd(coord, marker.id)}
                            draggable={true}
                            position={marker.position}
                            onClick={() => this.showName(marker.id)}>
                            <InfoWindow visible={this.state.open === marker.id} onCloseClick={() => this.hideName()}>
                                <span className="infoWindow">Something</span>
                            </InfoWindow>}
                        </Marker>
                    );
                })}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDrM-9kfb01hw-cavjmBiAzo4tDZPbUD6M'
})(MapContainer);
