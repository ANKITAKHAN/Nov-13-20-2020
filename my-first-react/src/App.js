import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Person from './Person';

class App extends Component {

  getCurrentTemperature() {
    return Math.random() * 40;
  }
  
  render() {

    return (<div>
        <Person 
            name="Ram" 
            age="12" 
            weather={this.getCurrentTemperature}/>
        <br/>
        <Person 
            name="Sam" 
            age="23" 
            weather={this.getCurrentTemperature}/>
        <br/>
        <Person 
            name="Alia" 
            age="45" 
            weather={this.getCurrentTemperature}/>

    </div>);

    // return (
    //   <div className="App">
    //       <Header/>
    //       <hr/>
    //       <Main/>
    //       <br/><br/><br/>
    //       <hr/>
    //       <Footer/>
    //   </div>
    // );
  }
}

export default App;
