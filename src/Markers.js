import React from 'react';
import MarkerItem from './MarkerItem';

class Markers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            newMarker: ''
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
        markers.push({ id: Date.now(), name: text });
        this.setState({ markers });
        this.setState({ newMarker: '' })
    }

    render() {
        return (
            <div className="markers">
                <form>
                    <input type="text" placeholder="New marker" onChange={this.handleChange} value={this.state.newMarker} />
                    <button onClick={this.createMarker}>Submit</button>
                </form>
                <ul>
                    {this.state.markers.map(marker => (<MarkerItem key={marker.id} name={marker.name} />))}
                </ul>
            </div>
        );
    }
}

export default Markers;
