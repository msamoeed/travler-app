import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Login from './views/Login/login'
import reportWebVitals from './reportWebVitals';
import ReactDropdown from 'react-dropdown';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Register from './views/Signup/signup'
import Dashboard from './views/Customer/dashboard'
import HotelManagerDash from './views/HotelManager/dashboard.js'
import Form from './views/HotelManager/addHotelForm'
import Hotel from './views/Customer/hotelDetails'


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  <Switch>
    
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} /> 
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/Hoteldashboard" component={HotelManagerDash} />
    <Route path="/Form" component={Form} />
    <Route path="/Hoteldetails" component={Hotel} />



    
  </Switch>
</Router>,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
