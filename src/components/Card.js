import React, { Component } from 'react'
import StarRating from './StarRating';

export default class Card extends Component {
  render() {
    return (
      <div className="bq-card">
        <div className="bq-card__image">
          <i className={this.props.icon}></i>
        </div>
        <div className="bq-card__rate">
          <StarRating key={this.props.index} index={this.props.index} full={this.props.rate} />
        </div>
        <div className="bq-card__desc">
          <span className="bq-card__desc-title"><strong>{this.props.name}</strong></span>
          {this.props.desc}
        </div>
      </div>
    )
  }
}
