import React, { Component } from 'react';
import '../styles/StyleToggle.css';

class StyleToggle extends Component {
  render() {

    const mapStyles = [
      {
        name: 'Satellite',
        url: 'mapbox://styles/mapbox/satellite-v9'
      },
      {
        name: 'Dark',
        url: 'mapbox://styles/mapbox/dark-v10'
      },
      {
        name: 'Light',
        url: 'mapbox://styles/mapbox/light-v10'
      }
    ]

    const buttons = mapStyles.map(style => {
      return <button>{style.name}</button>
    })

    return (
      <div className='style-toggler'>
        {buttons}
      </div>
    )
  }
}

export default StyleToggle;