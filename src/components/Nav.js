import React, { Component } from 'react'

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

  handleRoute = (e) => {
    e.preventDefault();
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
          <li className="bq-navigation__item bq-navigation__item--active">
            <a href="home" onClick={this.handleRoute}><span className="icon-home"></span> Home</a>
          </li>
          <li className="bq-navigation__item">
            <a href="about" onClick={this.handleRoute}><span className="icon-user-tie"></span> About Me</a>
          </li>
          <li className="bq-navigation__item">
            <a href="portfolio" onClick={this.handleRoute}><span className="icon-books"></span> Portfolio</a>
          </li>
          <li className="bq-navigation__item">
            <a href="contact" onClick={this.handleRoute}><span className="icon-sphere"></span> Contact</a>
          </li>
        </ul>
        <div onClick={this.toggleMenu} className={`bq-navigation__overlay ${this.state.overlayVisible}`}></div>
      </nav>
    )
  }
}
