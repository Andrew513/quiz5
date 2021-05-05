import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterButton from './cgu_CounterButton'
ReactDOM.render(
  <React.StrictMode>
    <App />
    <center>
    <CounterButton i='1'/>
    <CounterButton i='2'/>
    <CounterButton i='3'/>
    <CounterButton i='4'/>
    <CounterButton i='5'/>
    <CounterButton i='6'/>
    <CounterButton i='7'/>
    <CounterButton i='8'/>
    <CounterButton i='9'/>
    <CounterButton i='10'/>
    </center>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
