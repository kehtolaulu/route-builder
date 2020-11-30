import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { connect } from 'react-redux';
import { changePosition, changeCenter } from '../actions';

const mapStyles = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
};

const containerStyle = {
    width: '40%',
    height: '98%',
    position: 'absolute'
};

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: null,
            id: null
        };
    }

    onMarkerClick = (_props, marker, _e) => this.setState({ activeMarker: marker })

    hideName = () => this.setState({ activeMarker: null })

    onMarkerDragEnd = (coord, id) => {
        let { latLng } = coord;
        let lat = latLng.lat();
        let lng = latLng.lng();
        this.props.changePosition(id, { lat, lng });
    }

    onCenterChanged = (_mapProps, map) => this.props.changeCenter(map.center)

    render = () => (
        <Map
            google={this.props.google}
            zoom={11}
            style={mapStyles}
            containerStyle={containerStyle}
            initialCenter={this.props.center}
            onCenterChanged={this.onCenterChanged}
            clickableIcons={true}
        >
            {(this.props.markers || []).map(marker => (
                <Marker
                    label={marker.name}
                    id={marker.id}
                    key={marker.id}
                    name={marker.name}
                    onDragend={(_t, _map, coord) => this.onMarkerDragEnd(coord, marker.id)}
                    draggable={true}
                    position={marker.position}
                    onClick={this.onMarkerClick}
                />
            ))}
            <InfoWindow
                visible={this.state.activeMarker !== null}
                onClose={this.hideName}
                marker={this.state.activeMarker}
            >
                <div className="infoWindow">{this.state.activeMarker?.name}</div>
            </InfoWindow>
            <Polyline
                path={this.props.lineCoordinates}
                geodesic={true}
                options={{ strokeColor: "#ff2527" }}
            />
        </Map>
    )
}

const mapStateToProps = state => ({
    center: state.center
});

const mapDispatchToProps = dispatch => ({
    changePosition: (id, position) => dispatch(changePosition(id, position)),
    changeCenter: ({ lat, lng }) => dispatch(changeCenter(lat(), lng()))
});

const WrappedContainer = GoogleApiWrapper({
    apiKey: 'AIzaSyDrM-9kfb01hw-cavjmBiAzo4tDZPbUD6M'
})(MapContainer);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedContainer);
