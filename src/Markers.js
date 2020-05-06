import React from 'react';
import MarkerItem from './MarkerItem';
import MapContainer from "./MapContainer";

class Markers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            newMarker: '',
            center: {
                lat: 37.7749289,
                lng: -122.4050955710823
            },
            initialCenter: {
                lat: 37.7749289,
                lng: -122.4050955710823
            }
        };
    }

    handleChange = (e) => {
        this.setState({ newMarker: e.target.value });
    }

    createMarker = (e) => {
        e.preventDefault();
        let text = this.state.newMarker.trim();
        if (!text) {
            return;
        }
        let markers = this.state.markers;
        markers.push({ id: Date.now(), name: text, position: this.state.center });
        this.setState({ markers });
        this.setState({ newMarker: '' })
    }

    onCenterChanged = (mapProps, map) => {
        let lat = map.center.lat();
        let lng = map.center.lng();
        this.setState({ center: { lat, lng } });
    }

    onMarkerDragEnd = (coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        this.setState(_state => {
            const markers = [...this.state.markers];
            markers[index] = { ...markers[index], position: { lat, lng } };
            return { markers };
        });
    }

    render() {
        return (
            <div className="content">
                <MapContainer
                    markers={this.state.markers}
                    onCenterChanged={(mapProps, map) => this.onCenterChanged(mapProps, map)}
                    center={this.state.initialCenter}
                    onMarkerDragEnd={this.onMarkerDragEnd}
                />
                <div className="markers">
                    <form>
                        <input type="text" placeholder="New marker" onChange={this.handleChange} value={this.state.newMarker} />
                        <button onClick={this.createMarker}>Submit</button>
                    </form>
                    <ul>
                        {this.state.markers.map(marker => (<MarkerItem key={marker.id} name={marker.name} />))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Markers;
