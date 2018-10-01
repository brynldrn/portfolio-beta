import React, { Component } from 'react'
import Card from './Card';

export default class Skills extends Component {
  render() {
    return (
      <section className="bq-section bq-skills">
        <div className="bq-wrapper">
          <h1 className="bq-skills__heading">Skill Set</h1>
          <div className="bq-skills__card-wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    )
  }
}
