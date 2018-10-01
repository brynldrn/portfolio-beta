import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="bq-card">
        <div className="bq-card__image">
          <i className="devicon-react-original colored"></i>
        </div>
        <div className="bq-card__desc">
          <span className="bq-card__desc-title"><strong>ReactJS</strong></span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    )
  }
}
