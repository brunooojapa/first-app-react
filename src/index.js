import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './Home';
import About from './About';
import Contact from './Contact';

render((
  <Router history={browserHistory} >
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Router>
), document.getElementById('app'));