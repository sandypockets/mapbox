import React, { Component } from "react";
import mapbox from 'mapbox-gl';
import '../styles/PlaceItem.css';

class PlaceItem extends Component {
  render() {
    const app = this.props.app;
    const map = app.state.map;
    const place = this.props.place;

    if (map) {
      const popup = new mapbox.Popup({
        closeButton: false,
        className: 'popup'
      });
      popup.setHTML(place.title);
      const marker = new mapbox.Marker({
        color: '#2727e6'
      });
      marker.setLngLat([place.longitude, place.latitude]);
      marker.setPopup(popup);
      marker.addTo(map);
    }

    return(
      <div className='place-item'>
        {place.name} ({place.latitude}, {place.longitude})
      </div>
    )
  }
}

export default PlaceItem;