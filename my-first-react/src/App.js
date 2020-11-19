import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader></MyHeader>
      </div>
    );
  }
}

export default App;
