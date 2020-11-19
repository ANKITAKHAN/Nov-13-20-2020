import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: ''
    };
    this.getCurrentTime = this.getCurrentTime.bind(this); //Will explain later
  }

  getCurrentTime() {
    this.setState({ currentTime: new Date().toTimeString() });
  }

  render() {
    return (<div>
      <Input notify={this.getCurrentTime}/>
      <hr/>
      <Output now={this.state.currentTime}/>
    </div>);


  }
}

export default Parent;
