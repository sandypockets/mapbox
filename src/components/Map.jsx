import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import '../styles/Map.css';

class Map extends Component {


  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1Ijoic2FuZHlwb2NrZXRzIiwiYSI6ImNrbm5jZms1aDB4engycXBkbTJ6c2E4bXkifQ.T7DFN3K9wZDhzL34McBVcQ';
    const map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [
        -79.3832,
        43.6532,
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
  }

  render() {
    return (
      <div id='map'>
      </div>
    );
  }
}

export default Map;


