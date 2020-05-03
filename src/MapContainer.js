import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '700px',
  height: '700px'
};

const containerStyle = {
  width: '700px',
  height: '700px'
}

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{
          lat: 55.6132,
          lng: 51.8470
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDrM-9kfb01hw-cavjmBiAzo4tDZPbUD6M'
})(MapContainer);
