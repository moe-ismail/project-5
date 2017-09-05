import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} 
from 'react-router-dom'
import 'axios';


class Form extends Component {
  render() {
    return (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
);
}
}

class Home extends Component {
  render() {
    return (
  <div>
    <h2>Home</h2>
  </div>
);
}
}

class About extends Component {
render() {
    return (
  <div>
    <h2>About</h2>
  </div>
);
}
}


class Topics extends Component {
render() {
    return (
  <div>
    <h2>Topics</h2>
  </div>
);
}
}

export default Form;


