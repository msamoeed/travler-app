import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Login from './views/Login/login'
import reportWebVitals from './reportWebVitals';
import ReactDropdown from 'react-dropdown';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Register from './views/Signup/signup'
import Dashboard from './views/Customer/restaurants'

import Hotel from './views/Customer/hotelDetails'
import App from './App'

const hist = createBrowserHistory();

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
