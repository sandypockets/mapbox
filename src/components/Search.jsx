import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isLoading: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const accessToken = 'pk.eyJ1Ijoic2FuZHlwb2NrZXRzIiwiYSI6ImNrbm5sdm51aDB3bXQydnFqamU1Y2NqOHgifQ.VeHCDQyCKv2pzp1LKUjbeg';
    const searchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

    fetch(searchUrl).then(response => response.json()).then(data => {

      console.log(data)
      const firstResult = data.features[0];
      console.log(firstResult);
      const oldPlaces = this.props.app.state.places;

      oldPlaces.push({
        name: this.state.value,
        longitude: firstResult.center[0],
        latitude: firstResult.center[1],
        title: firstResult['place_name']
      })
      this.props.app.setState({
        places: oldPlaces
      })
      this.setState({
        value: ''
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} placeholder='Add place...' />
      </form>
    )
  }
}

export default Search;