import React, { Component } from 'react';

class Person extends Component {
  render() {

    return (<div>
      <h1>{this.props.name}</h1>
      <h2>Age: {this.props.age}</h2>
      <h3>Temperature of my city is {this.props.weather()}</h3>
    </div>);


  }
}

export default Person;
