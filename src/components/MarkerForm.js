import React from 'react';
import { connect } from 'react-redux';
import { createMarker } from '../actions';

class MarkerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMarker: ''
        };
    }

    handleChange = e => this.setState({ newMarker: e.target.value });

    createMarker = e => {
        e.preventDefault();
        let text = this.state.newMarker.trim();
        if (!text) { return; }
        this.props.createMarker(Date.now(), text, this.props.center);
        this.setState({ newMarker: '' });
    }

    render = () => (
        <form onSubmit={this.createMarker}>
            <input
                className="input"
                type="text"
                placeholder="New marker"
                onChange={this.handleChange}
                value={this.state.newMarker}
                maxLength={32}
            />
            <input type="submit" className="hide" />
        </form>
    );
}
const mapStateToProps = state => ({
    center: state.center
});

const mapDispatchToProps = dispatch => ({
    createMarker: (id, name, position) => dispatch(createMarker(id, name, position))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkerForm);
