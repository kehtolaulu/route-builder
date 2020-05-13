import React from 'react';
import { connect } from 'react-redux';
import MarkerItemsList from './MarkerItemsList';
import MarkerForm from './MarkerForm';

const Markers = ({ markers }) => (
    <div className="markers">
        <MarkerForm />
        <MarkerItemsList markers={markers} />
    </div>
);

const mapStateToProps = state => ({
    markers: state.markers,
});

export default connect(
    mapStateToProps
)(Markers);
