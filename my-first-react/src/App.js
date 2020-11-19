import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <hr/>
          <Main/>
          <br/><br/><br/>
          <hr/>
          <Footer/>
      </div>
    );
  }
}

export default App;
