import React, { Component } from "react";
import './App.css';
import Map from './components/Map.jsx';
import StyleToggle from "./components/StyleToggle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 43.6532,
      longitude: -79.3832,
      style: 'mapbox://styles/mapbox/dark-v9'
    }
  }

  render() {
    return (
      <div className="App">
        <StyleToggle app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
