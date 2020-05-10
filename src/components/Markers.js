import React from 'react';
import { connect } from 'react-redux';
import {
    deleteMarker,
    changePosition,
    setDraggedItem,
    changeCenter,
    addMarker
} from '../actions';
import MapContainer from './MapContainer';
import MarkerItemsList from './MarkerItemsList';
import MarkerForm from './MarkerForm';

class Markers extends React.Component {
    onCenterChanged = (_mapProps, map) => {
        this.props.changeCenter(map.center.lat(), map.center.lng());
    }

    onMarkerDragEnd = (coord, id) => {
        let { latLng } = coord;
        let lat = latLng.lat();
        let lng = latLng.lng();
        this.props.changePosition(id, { lat, lng });
    }

    onDragStart = (e, index) => {
        this.props.setDraggedItem(index);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = (index) => {
        if (index === this.props.draggedItem()) return;
        this.props.changeOrder(index, this.props.draggedItem());
    };

    onDragEnd = () => {
        this.props.setDraggedItem({});
    };

    deleteMarker = (id) => {
        this.props.deleteMarker(id);
    };

    render() {
        return (
            <div className="content">
                <div className="map-container">
                    <MapContainer
                        markers={this.props.state.markers}
                        onCenterChanged={(mapProps, map) => this.onCenterChanged(mapProps, map)}
                        center={this.props.state.initialCenter}
                        onMarkerDragEnd={this.onMarkerDragEnd}
                        lineCoordinates={this.props.state.markers.map(marker => marker.position)}
                    />
                </div>
                <div className="markers">
                    <MarkerForm />
                    <MarkerItemsList
                        markers={this.props.state.markers}
                        onDragOver={this.onDragOver}
                        onDragStart={this.onDragStart}
                        onDragEnd={this.onDragEnd}
                        onMarkerDelete={this.deleteMarker}
                    />
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    deleteMarker: (id) => dispatch(deleteMarker(id)),
    changePosition: (index, position) => dispatch(changePosition(index, position)),
    changeOrder: (before, marker) => {
        deleteMarker(marker.id);
        addMarker(before, marker);
    },
    setDraggedItem: (index) => dispatch(setDraggedItem(index)),
    changeCenter: (lat, lng) => dispatch(changeCenter(lat, lng))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Markers);
