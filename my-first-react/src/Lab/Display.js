import React, { Component } from 'react';


class Display extends Component {
    render() {
        return (<div>
            <h1>{this.props.message}</h1>
        </div>);
    }
}

export default Display;