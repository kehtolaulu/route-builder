import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';

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
            activeMarker: null,
            id: null
        };
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({ activeMarker: marker });
    }

    hideName = () => {
        this.setState({ activeMarker: null });
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
                clickableIcons={true}
            >
                {(this.props.markers || []).map(marker => {
                    return (
                        <Marker
                            id={marker.id}
                            key={marker.id}
                            name={marker.name}
                            onDragend={(t, map, coord) => this.props.onMarkerDragEnd(coord, marker.id)}
                            draggable={true}
                            position={marker.position}
                            onClick={this.onMarkerClick}
                        >
                        </Marker>
                    );
                })}
                <InfoWindow visible={this.state.activeMarker !== null}
                    onClose={this.hideName}
                    marker={this.state.activeMarker}>
                    <div className="infoWindow">{this.state.activeMarker?.name}}</div>
                </InfoWindow>
                <Polyline
                    path={this.props.lineCoordinates}
                    geodesic={true}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                        icons: [
                            {
                                // icon: lineSymbol,
                                offset: "0",
                                repeat: "20px"
                            }
                        ]
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDrM-9kfb01hw-cavjmBiAzo4tDZPbUD6M'
})(MapContainer);
