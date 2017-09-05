import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} 
from 'react-router-dom'
import 'axios';
import Job from './Job';
import Alien from './Alien';
import Form from './Form';

let axios = require('axios');

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      encounters: []
    };
  }
  componentDidMount() {
  const API_URL = ('https://red-wdp-api.herokuapp.com/api/mars/encounters')
axios.get(API_URL)
.then(res => {
 // console.log(res);
    const encounters = res.data.encounters;
    this.setState({ encounters });
    });       
};


  render() {
    
    const encounters = this.state.encounters;
    const mappedEncounters = encounters.map(encounter=> <li>  {encounter.action}{encounter.atype} </li>);
    
    return (
      <div className="App">
       <Job/>
       <Alien/>
       <Form />
   
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
      <ul key={mappedEncounters.toString()}>
       {mappedEncounters}
     </ul>
); 
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;

