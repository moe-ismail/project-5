import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} 
from 'react-router-dom'
import 'axios';

let axios = require('axios');

class Alien extends React.Component {
  constructor(props){
    super(props);

    this.state={
      aliens: []
    };
  }

// API Call to get aliens
  
  componentDidMount() {
  const API_URL = ('https://red-wdp-api.herokuapp.com/api/mars/aliens')
axios.get(API_URL)
.then(res => {
//  console.log(res);
    const aliens = res.data.aliens;
    this.setState({ aliens });
    });       
};



render() {
    
    const aliens = this.state.aliens;
    const mappedAliens = aliens.map(aliens=> <li>  {aliens.action}{aliens.atype} </li>);
    
    return (
      <div className="Alien">

      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
      <ul key={mappedAliens.toString()}>
       {mappedAliens}
     </ul>
); 
     
      </div>
    );
  }
}
export default Alien;