import React, { Component } from 'react'

export default class StarRating extends Component {

  renderFull = () => {
    return React.createElement('span', { className: 'icon-star-full', key: this.props.index + Math.random() });
  }

  renderHalf = () => {
    return React.createElement('span', { className: 'icon-star-half', key: this.props.index + Math.random() });
  }

  renderEmpty = () => {
    return React.createElement('span', { className: 'icon-star-empty', key: this.props.index + Math.random() });
  }

  renderRating = () => {
    const full = Math.floor(this.props.full);
    const empty = 5 - Math.floor(this.props.full);
    const half = this.props.full % 1;

    let composed = [];

    for ( let x = 0; x < full; x++ ) {
      composed.push(this.renderFull());
    }

    if ( half !== 0 ) {
      composed.push(this.renderHalf());
      const tmp = Math.floor(5 - this.props.full);

      for ( let x = 0; x < tmp; x++ ) {
        composed.push(this.renderEmpty());
      }
    } else {
      for ( let x = 0; x < empty; x++ ) {
        composed.push(this.renderEmpty());
      }
    }

    return composed;
  }

  render() {
    const stars = this.renderRating();
    return (
      Object.keys(stars).map(key => {
        return stars[key]
      })
    )
  }
}
