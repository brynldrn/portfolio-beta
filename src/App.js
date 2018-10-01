import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
