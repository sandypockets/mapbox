import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import '../styles/Map.css';

class Map extends Component {


  componentDidMount() {
    const app = this.props.app;

    mapbox.accessToken = 'pk.eyJ1Ijoic2FuZHlwb2NrZXRzIiwiYSI6ImNrbm5sdm51aDB3bXQydnFqamU1Y2NqOHgifQ.VeHCDQyCKv2pzp1LKUjbeg';
    const map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [
        app.state.longitude,
        app.state.latitude,
      ],
      zoom: 12
    });
    map.addControl(new mapbox.NavigationControl());
    map.addControl(new mapbox.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    this.props.app.setState({
      map: map
    })
  }

  render() {
    const app = this.props.app;
    const map = app.state.map;

    if (map) {
      map.setStyle(app.state.style)
    }

    return (
      <div id='map'>
      </div>
    );
  }
}

export default Map;


