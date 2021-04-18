import React, { Component } from 'react';
import '../styles/StyleToggle.css';

class StyleToggle extends Component {

  setLayer(url) {
    this.props.app.setState({
      style: url
    })
  }

  render() {
    const styles = [
      {
        name: 'Streets',
        url: 'mapbox://styles/mapbox/satellite-streets-v11'
      },
      {
        name: 'Satellite',
        url: 'mapbox://styles/mapbox/satellite-v9'
      },
      {
        name: 'Outdoors',
        url: 'mapbox://styles/mapbox/outdoors-v11'
      },
      {
        name: 'Dark',
        url: 'mapbox://styles/mapbox/dark-v10'
      },
      {
        name: 'Light',
        url: 'mapbox://styles/mapbox/light-v10'
      }
    ];
    const buttons = styles.map(style => {
      return (
        <button
          onClick={() => this.setLayer(style.url)}>
          {style.name}
        </button>
      )
    })

    return (
      <div className='style-toggler'>
        {buttons}
        {this.props.app.style}
      </div>
    )
  }
}

export default StyleToggle;