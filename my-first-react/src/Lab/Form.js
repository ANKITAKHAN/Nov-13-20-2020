import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    
    nameChanged(e) {
        this.setState({
            name: e.target.value
        });
    }

    buttonClicked() {
        let { name } = this.state;
        //pass this name to the parent
        this.props.notifyHandler(name);
    }

    render() {
        return (<div>
            <input type="text" placeholder="Name" onChange={e => this.nameChanged(e)}></input> <br/>
            <button onClick={() => this.buttonClicked()}>Click</button>
        </div>);
    }
}

export default Form;