import React, { Component } from 'react';
import '../styles/StyleToggle.css';

class StyleToggle extends Component {
  render() {
    return (
      <div className='style-toggler'>
        {this.props.app.state.style}
      </div>
    )
  }
}

export default StyleToggle;