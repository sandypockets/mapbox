import React, { Component } from "react";
import './styles/App.css';
import Map from './components/Map.jsx';
import StyleToggle from "./components/StyleToggle";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      latitude: 43.6532,
      longitude: -79.3832,
      style: 'mapbox://styles/mapbox/dark-v9'
    }
  }

  render() {
    return (
      <div className="App">
        <Search app={this} />
        <StyleToggle app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
