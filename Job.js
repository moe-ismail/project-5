import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} 
from 'react-router-dom'
import 'axios';

let axios = require('axios');

class Job extends React.Component {
  constructor(props){
    super(props);

    this.state={
      jobs: []
    };
  }
  componentDidMount() {
  const API_URL = ('https://red-wdp-api.herokuapp.com/api/mars/jobs')
axios.get(API_URL)
.then(res => {
 // console.log(res);
    const encounters = res.data.jobs;
    this.setState({ Job });
    });       
};


  render() {
    
    const jobs = this.state.jobs;
    const mappedJobs = jobs.map(job=> <li>  {job.action}{job.atype} </li>);
    
    return (
      <div className="Job">
   
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
      <ul key={mappedJobs.toString()}>
       {mappedJobs}
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

 export default Job;