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
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input value={this.state.value} onChange={this.handleChange} placeholder='Add place...' />
      </form>
    )
  }
}

export default Search;