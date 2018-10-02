import React, { Component } from 'react'
import Card from './Card';
import skillSet from '../data/skillSet';

export default class Skills extends Component {
  render() {
    return (
      <section className="bq-section bq-skills">
        <div className="bq-wrapper">
          <h1 className="bq-skills__heading">Skill Set</h1>
          <div className="bq-skills__card-wrapper">
            {
              Object.keys(skillSet).map((key, index) => (
                <Card key={index} index={index} icon={skillSet[key].icon} name={skillSet[key].name} rate={skillSet[key].rate} desc={skillSet[key].description} />
              ))
            }
          </div>
        </div>
      </section>
    )
  }
}
