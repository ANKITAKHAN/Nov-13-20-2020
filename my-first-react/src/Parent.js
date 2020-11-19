import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: ''
    };
    this.callMe = this.callMe.bind(this); //Will explain later
  }

  callMe() {
    this.setState({ currentTime: new Date().toTimeString() });
  }

  render() {
    return (<div>
      <Input callParent={this.callMe}/>
      <hr/>
      <Output now={this.state.currentTime}/>
    </div>);


  }
}

export default Parent;
