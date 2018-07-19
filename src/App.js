import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import Miss from './components/Miss'
import OwnerCreateReg from './components/owner/OwnerCreateReg'
import GuestJoin from './components/guest/GuestJoin'
import GuestRegistry from './components/guest/GuestRegistry'
import Owner from './components/owner/Owner'
import GuestLogin from './components/guest/GuestLogin'
import OwnerLogin from './components/owner/OwnerLogin'


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact={true} path='/' component={Main}/>
            <Route exact={true} path='/create/reg' component={OwnerCreateReg}/>
            <Route exact={true} path='/join/reg' component={GuestJoin}/>
            <Route exact={true} path='/reg/guest/login' component={GuestLogin}/>
            <Route exact={true} path='/reg/owner/login' component={OwnerLogin}/>
            <Route exact={true} path='/reg/guest/:guest_user_name' component={GuestRegistry}/>
            <Route exact={true} path='/reg/owner/:user_name' component={Owner}/>
            <Route path='*' component={Miss} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    registries: state.registries,
    products: state.products,
    notification: state.notifications
  }
}

export default connect(mapStateToProps)(App);
