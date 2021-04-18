import React, { Component } from "react";
import './styles/App.css';
import Map from './components/Map.jsx';
import StyleToggle from "./components/StyleToggle";
import Search from "./components/Search";
import PlacesPanel from "./components/PlacesPanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      latitude: 43.6532,
      longitude: -79.3832,
      style: 'mapbox://styles/mapbox/dark-v9',
      places: [
        {
          name: '290 Bremner Blvd',
          latitude: 43.6426,
          longitude: -79.3871
        },
        {
          name: '290 Bremner Blvd',
          latitude: 43.6426,
          longitude: -79.3871
        },
        {
          name: '290 Bremner Blvd',
          latitude: 43.6426,
          longitude: -79.3871
        },
        {
          name: '290 Bremner Blvd',
          latitude: 43.6426,
          longitude: -79.3871
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <StyleToggle app={this} />
        <Search app={this} />
        <PlacesPanel app={this}/>
        <Map app={this} />
      </div>
    );
  }
}

export default App;
