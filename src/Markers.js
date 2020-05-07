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
            },
            draggedItem: {}
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

    onDragStart = (e, index) => {
        this.setState({ draggedItem: this.state.markers[index] });
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = (index) => {
        let draggedOverItem = this.state.markers[index];
        if (this.state.draggedItem === draggedOverItem) {
            return;
        }
        let items = this.state.markers.filter(marker => marker !== this.state.draggedItem);
        items.splice(index, 0, this.state.draggedItem);
        this.setState({ markers: items });
    };

    onDragEnd = () => {
        this.setState({ draggedItem: {} });
    };

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
                        <input
                            type="text"
                            placeholder="New marker"
                            onChange={this.handleChange}
                            value={this.state.newMarker}
                        />
                        <button onClick={this.createMarker}>Submit</button>
                    </form>
                    <ul>
                        {this.state.markers.map((marker, index) => {
                            return <MarkerItem
                                key={marker.id}
                                name={marker.name}
                                onDragOver={() => this.onDragOver(index)}
                                onDragStart={e => this.onDragStart(e, index)}
                                onDragEnd={this.onDragEnd}
                            />
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Markers;
