import React from 'react';
import { connect } from 'react-redux';
import { deleteMarker, setDraggedItem, changeOrder } from '../actions';
import MarkerItemsList from './MarkerItemsList';
import MarkerForm from './MarkerForm';

class Markers extends React.Component {
    onDragStart = (e, id) => {
        this.props.setDraggedItem(id);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = (id) => {
        if (id === this.props.draggedItem) { return; }
        this.props.changeOrder(id, this.props.draggedItem);
    };

    onDragEnd = () => {
        this.props.setDraggedItem({});
    };

    deleteMarker = (id) => {
        this.props.deleteMarker(id);
    };

    render() {
        return (
            <div className="markers">
                <MarkerForm />
                <MarkerItemsList
                    markers={this.props.markers}
                    onDragOver={this.onDragOver}
                    onDragStart={this.onDragStart}
                    onDragEnd={this.onDragEnd}
                    onMarkerDelete={this.deleteMarker}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    markers: state.markers,
    draggedItem: state.draggedItem
});

const mapDispatchToProps = dispatch => ({
    deleteMarker: (id) => dispatch(deleteMarker(id)),
    changeOrder: (index, marker) => dispatch(changeOrder(index, marker)),
    setDraggedItem: (index) => dispatch(setDraggedItem(index)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Markers);
