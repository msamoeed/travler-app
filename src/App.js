import React from 'react';
import ReactDOM from 'react-dom';



import Login from './views/Login/login'
import reportWebVitals from './reportWebVitals';
import ReactDropdown from 'react-dropdown';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Register from './views/Signup/signup'
import Dashboard from './views/Customer/restaurants'
import HotelManagerDash from './views/HotelManager/home.js'
import Hotel from './views/Customer/hotelHome'
import NavData from "./views/Customer/drawerData";
import CustomerHome from './views/Customer/home';
import LoginScreen from './views/Login/login';
import Restaurants from './views/Customer/restaurants'
import HotelManagerNavData from './views/HotelManager/drawerData'
import HotelManagerHome from './views/HotelManager/home'
import TourManagerNavData from './views/TourPackageManager/drawerData'
import TourManagerHome from './views/TourPackageManager/home'
export const hist = createBrowserHistory();



const App = ({ match }) => {

  return (
    <div className="App">

      <Router history={hist}>
        <Switch>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user/dashboard" component={Dashboard} />
          <Route path="/Hoteldashboard" component={HotelManagerDash} />
          <Route path="/hotelHome" component={Hotel} />
          {/* <Route path="/customer" component = {()=><CustomerHome component= { <Restaurants/> } /> } /> */}


          {NavData.map((item, index) => {

            if (item.name == 'Hotels' | item.name == 'Restaurants') {
              console.log("HELLOR WORLDDD")
              return (
                <Route
                  key={index}
                  path={item.path}
                  component={() => <CustomerHome component={item.component} appbar={item.appbar} />}
                />
              );
            }
            else {
              return (
                <Route
                  key={index}
                  path={item.path}
                  component={() => <CustomerHome component={item.component} />}
                />
              );
            }


          })}


          {HotelManagerNavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => <HotelManagerHome component={item.component}  />}
              />
            );
          })}

        {TourManagerNavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => <TourManagerHome component={item.component}  />}
              />
            );
          })}



        </Switch>
      </Router>,


    </div>
  )
}

export default App;
