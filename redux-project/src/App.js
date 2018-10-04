import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardForm from './CardForm';
import { connect } from 'react-redux';
import { onChangeForm, submitForm } from './actions';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <CardForm onChange={this.props.onChange} />
          <button onClick={this.props.submit}>Click Aqui para hacer nueva tarjeta</button>  
          {this.props.cards && this.props.cards.map(item => <div>{item.name} ({item.tag})</div>)} 
        </p>
      </div>
    );
  }
}

const dispatchToProps = dispatch => ({
  onChange: (evt) => dispatch(onChangeForm(evt)),
  submit: () => dispatch(submitForm()),
})
export default connect(state=> ({cards: state.cards}), dispatchToProps)(App);