import React from 'react';
import ReactDOM from 'react-dom';



import Login from './views/Login/login'
import reportWebVitals from './reportWebVitals';
import ReactDropdown from 'react-dropdown';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Register from './views/Signup/signup'
import Dashboard from './views/Customer/restaurants'
import HotelManagerDash from './views/HotelManager/dashboard.js'
import Form from './views/HotelManager/addHotelForm'
import Hotel from './views/Customer/hotelDetails'
import NavData from "./views/Customer/drawerData";
import CustomerHome from './views/Customer/home';
import LoginScreen from './views/Login/login';
import Restaurants from './views/Customer/restaurants'

const hist = createBrowserHistory();



const App = ({ match }) => {

    return (
        <div className="App">

<Router history={hist}>
  <Switch>
  
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} /> 
    <Route path="/user/dashboard" component={Dashboard} />
    <Route path="/Hoteldashboard" component={HotelManagerDash} />
    <Route path="/Form" component={Form} />
    <Route path="/Hoteldetails" component={Hotel} />
   {/* <Route path="/customer" component = {()=><CustomerHome component= { <Restaurants/> } /> } /> */}

    
          {NavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => <CustomerHome component={item.component} />}
              />
            );
          })}




    
  </Switch>
</Router>,


        </div>
    )
}

export default App;
