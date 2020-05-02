import React from 'react';

class Markers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: {},
        };
    }

    createMarker = () => {

    }

    render() {
        return (
            <div className="markers">
                <form>
                    <input type="text" placeholder="New marker" />
                    <button onClick={this.createMarker}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Markers;
