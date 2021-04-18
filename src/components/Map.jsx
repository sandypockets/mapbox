import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import '../styles/Map.css';

class Map extends Component {

  componentDidMount() {
    mapbox.accessToken = 'pk.eyJ1Ijoic2FuZHlwb2NrZXRzIiwiYSI6ImNrbm5jZms1aDB4engycXBkbTJ6c2E4bXkifQ.T7DFN3K9wZDhzL34McBVcQ';
    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10'
    });
  }

  render() {
    return (
      <div id='map'>
      </div>
    );
  }
}

export default Map;



// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


