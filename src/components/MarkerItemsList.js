import React from 'react'; // eslint-disable-line no-unused-vars
import MarkerItem from './MarkerItem';
import { connect } from 'react-redux';
import { deleteMarker, setDraggedItem, changeOrder } from '../actions';

class MarkerItemsList extends React.Component {
    onDragStart = (e, id) => {
        this.props.setDraggedItem(id);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = id => {
        if (id === this.props.draggedItem) { return; }
        this.props.changeOrder(id, this.props.draggedItem);
    };

    onDragEnd = () => this.props.setDraggedItem(null);

    deleteMarker = id => this.props.deleteMarker(id);

    render = () => (
        <ul className="markers-list">
            {(this.props.markers || []).map(marker => (
                <MarkerItem
                    key={marker.id}
                    name={marker.name}
                    onDragOver={() => this.onDragOver(marker.id)}
                    onDragStart={e => this.onDragStart(e, marker.id)}
                    onDragEnd={this.onDragEnd}
                    onMarkerDelete={() => this.deleteMarker(marker.id)}
                />
            ))}
        </ul>
    );
}

const mapStateToProps = state => ({
    draggedItem: state.draggedItem
});

const mapDispatchToProps = dispatch => ({
    deleteMarker: (id) => dispatch(deleteMarker(id)),
    changeOrder: (afterId, markerId) => dispatch(changeOrder(afterId, markerId)),
    setDraggedItem: (index) => dispatch(setDraggedItem(index)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkerItemsList);
