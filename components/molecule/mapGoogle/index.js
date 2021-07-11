import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GoogleApiWrapper} from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key:"AIzaSyA8zUUJ_7r-TX8wPDP38P2Wcw2GCo6WVtI"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-34.397}
            lng={150.644}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;