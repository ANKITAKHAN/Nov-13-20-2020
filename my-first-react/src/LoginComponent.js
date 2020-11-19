import React, { Component } from 'react';
import './LoginComponent.css';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            message: '',
            disabled: false,
            cssClass: ''
        };
    }

    userNameChanged(e) {
        this.setState({
            userName: e.target.value
        });
    }

    passwordChanged(e) {
        this.setState({
            password: e.target.value
        });
    }

    loginButtonClicked() {
        let  { userName, password, disabled, cssClass } = this.state;
        let message = "Incorrect username or password";
        cssClass = "wrong";
        if (userName === "admin" && password === "admin") {
            message = "Logging in...";
            disabled = true;
            cssClass = "correct";
        }
        this.setState({ message, disabled, cssClass });
    }

    render() {
        return (<div className="login">
            <h1>Login page</h1>
            <input type="text" placeholder="Username" onChange={(e) => this.userNameChanged(e)}></input> <br/>
            <input type="password" onChange={(e) => this.passwordChanged(e)}></input> <br/>
            <button disabled={this.state.disabled} onClick={() => this.loginButtonClicked()}>Login</button>
            <h1 className={this.state.cssClass}>{this.state.message}</h1>
        </div>);
    }
}

export default LoginComponent;