import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './LoginComponent';
import MyHeader from './MyHeader';
import Collections from './Collections';
import Lab01Component from './Lab01Component';
import Parent from './Parent';

// ReactDOM.render(
//     <LoginComponent/>, document.getElementById('root')
// );

ReactDOM.render(
    <Parent/>, document.getElementById('root')
);

// ReactDOM.render(
//     <MyHeader/>, document.getElementById('root')
// );

// ReactDOM.render(
//     <Collections/>, document.getElementById('root')
// );

// ReactDOM.render(
//     <Lab01Component/>, document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
