import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import Lab01Component from './Lab01Component';

class Main extends Component {
  render() {
    return (
      <div>
        <LoginComponent/>
        <hr/>
        <Lab01Component/>
      </div>
    );
  }
}

export default Main;
