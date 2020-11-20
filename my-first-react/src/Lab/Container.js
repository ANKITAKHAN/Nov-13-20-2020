import React, { Component } from 'react';
import Display from './Display';
import Form from './Form';


class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        // If you want to use state from a method, which is not an event handler
        this.notify = this.notify.bind(this);
    }

    notify(name) {
        let message = `Hi ${name}`;
        this.setState({ message });
    }

    render() {
        return (<div>
            <Form notifyHandler={this.notify}/>
            <hr/>
            <Display message={this.state.message}/>
        </div>);
    }
}

export default Container;