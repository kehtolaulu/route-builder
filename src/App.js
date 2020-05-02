import React from 'react';
import MapContainer from './MapContainer';
import Markers from './Markers';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <MapContainer />
        <Markers />
      </div>
    );
  }
}

export default App;
