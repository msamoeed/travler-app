import React from 'react'
import ReactDOM from 'react-dom'

import Login from './views/Login/login'
import reportWebVitals from './reportWebVitals'
import ReactDropdown from 'react-dropdown'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Register from './views/Signup/signup'
import Dashboard from './views/Customer/restaurants'
import HotelManagerDash from './views/HotelManager/home.js'
import Hotel from './views/Customer/hotelHome'
import NavData from './views/Customer/drawerData'
import CustomerHome from './views/Customer/home'
import LoginScreen from './views/Login/login'
import Restaurants from './views/Customer/restaurants'
import HotelManagerNavData from './views/HotelManager/drawerData'
import HotelManagerHome from './views/HotelManager/home'
import TourManagerNavData from './views/TourPackageManager/drawerData'
import RestaurantManagerNavData from './views/RestaurantManager/drawerData'
import TourManagerHome from './views/TourPackageManager/home'
import RestaurantManagerHome from './views/RestaurantManager/home'
import EventManagerHome from './views/EventManager/home'
import RestaurantDetail from './views/RestaurantManager/restaurantDetail'
import EventDetail from './views/EventManager/eventDetail'
import EventManagerNavData from './views/EventManager/drawerData'

import TransportManagerNavData from './views/TransportManager/drawerData'
import TransportManagerHome from './views/TransportManager/home'
import TransportDetail from './views/TransportManager/transportDetail'

export const hist = createBrowserHistory()

const App = ({ match }) => {
  return (
    <div className='App'>
      <Router history={hist}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/user/dashboard' component={Dashboard} />
          <Route path='/Hoteldashboard' component={HotelManagerDash} />
          <Route
            path='/RestaurantDashboard'
            component={RestaurantManagerHome}
          />
          <Route path='/RestaurantDetail' component={RestaurantDetail} />
          <Route path='/hotelHome' component={Hotel} />
          {/* <Route path="/customer" component = {()=><CustomerHome component= { <Restaurants/> } /> } /> */}

          {NavData.map((item, index) => {
            if ((item.name == 'Hotels') | (item.name == 'Restaurants')) {
              console.log('HELLOR WORLDDD')
              return (
                <Route
                  key={index}
                  path={item.path}
                  component={() => (
                    <CustomerHome
                      component={item.component}
                      appbar={item.appbar}
                    />
                  )}
                />
              )
            } else {
              return (
                <Route
                  key={index}
                  path={item.path}
                  component={() => <CustomerHome component={item.component} />}
                />
              )
            }
          })}

          {HotelManagerNavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => (
                  <HotelManagerHome component={item.component} />
                )}
              />
            )
          })}

          {TourManagerNavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => <TourManagerHome component={item.component} />}
              />
            )
          })}

          {RestaurantManagerNavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => (
                  <RestaurantManagerHome component={item.component} />
                )}
              />
            )
          })}

          {EventManagerNavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => (
                  <EventManagerHome component={item.component} />
                )}
              />
            )
          })}

          {TransportManagerNavData.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={() => (
                  <TransportManagerHome component={item.component} />
                )}
              />
            )
          })}

          <Route
            path='/restaurantManager/restaurantDetails'
            component={() => (
              <RestaurantManagerHome
                component={
                  <RestaurantDetail
                    restD={localStorage.getItem('restD')}
                    restName={localStorage.getItem('restName')}
                    restAddress={localStorage.getItem('restAddress')}
                  />
                }
              />
            )}
          />

          <Route
            path='/eventManager/eventDetail'
            component={() => (
              <EventManagerHome
                component={
                  <EventDetail
                    eventID={localStorage.getItem('eventID')}
                    eventName={localStorage.getItem('eventName')}
                    eventAddress={localStorage.getItem('eventAddress')}
                  />
                }
              />
            )}
          />

          <Route
            path='/transportManager/transportDetail'
            component={() => (
              <TransportManagerHome
                component={
                  <TransportDetail
                    transportID={localStorage.getItem('transportID')}
                    transportName={localStorage.getItem('transportName')}
                    transportAddress={localStorage.getItem('transportAddress')}
                    transportPrice={localStorage.getItem('transportPrice')}
                  />
                }
              />
            )}
          />
        </Switch>
      </Router>
      ,
    </div>
  )
}

export default App
