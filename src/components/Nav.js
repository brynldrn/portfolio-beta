import React, { Component } from 'react'
import BodyClassName from 'react-body-classname';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  state = {
    menuClass: 'icon-menu',
    menuVisible: '',
    bodyClass: '',
    overlayVisible: '',
  }

  toggleMenu = () => {
    if ( this.state.menuClass === 'icon-menu' ) {
      this.setState({ menuClass: 'icon-cross' });
      this.setState({ menuVisible: 'bq-navigation__menu--visible' });
      this.setState({ overlayVisible: 'bq-navigation__overlay--visible' });
      this.setState({ bodyClass: 'no-scroll' });
    } else {
      this.setState({ menuClass: 'icon-menu' });
      this.setState({ menuVisible: '' });
      this.setState({ overlayVisible: '' });
      this.setState({ bodyClass: '' });
    }
  }

  render() {
    return (
      <nav className="bq-navigation">
        <BodyClassName className={this.state.bodyClass}></BodyClassName>
        <ul className={`bq-navigation__menu ${this.state.menuVisible}`}>
          <li>
            <div className="bq-navigation__control">
              <button onClick={this.toggleMenu}><span className={this.state.menuClass}></span></button>
            </div>
          </li>
          <li className="bq-navigation__item">
            <NavLink activeClassName="active" to="/home" onClick={this.toggleMenu}><span className="icon-home"></span> Home</NavLink>
          </li>
          <li className="bq-navigation__item">
            <NavLink activeClassName="active" to="/about" onClick={this.toggleMenu}><span className="icon-user-tie"></span> About Me</NavLink>
          </li>
          <li className="bq-navigation__item">
            <NavLink activeClassName="active" to="/portfolio" onClick={this.toggleMenu}><span className="icon-books"></span> Portfolio</NavLink>
          </li>
          <li className="bq-navigation__item">
            <NavLink activeClassName="active" to="/contact" onClick={this.toggleMenu}><span className="icon-sphere"></span> Contact</NavLink>
          </li>
        </ul>
        <div onClick={this.toggleMenu} className={`bq-navigation__overlay ${this.state.overlayVisible}`}></div>
      </nav>
    )
  }
}
