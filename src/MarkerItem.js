import React from 'react';

class MarkerItem extends React.Component {
    render() {
        return (
            <li className="marker-item">
                {this.props.name}
            </li>
        );
    }
}

export default MarkerItem;
