import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { connect } from 'react-redux';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Login />
        </p>
      </div>
    );
  }
}

export default connect()(App);