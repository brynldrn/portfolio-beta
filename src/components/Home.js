import React, { Component, Fragment } from 'react'
import Hero from './Hero';
import Skills from './Skills';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Skills />
      </Fragment>
    )
  }
}
