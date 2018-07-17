import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import Miss from './components/Miss'
import CreateReg from './components/CreateReg'
import JoinReg from './components/JoinReg'
import RegistryGuest from './components/RegistryGuest'
import RegistryOwner from './components/RegistryOwner'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact={true} path='/' component={Main}/>
            <Route exact={true} path='/create/reg' component={CreateReg}/>
            <Route exact={true} path='/join/reg' component={JoinReg}/>
            <Route exact={true} path='/reg/guest/:user_name' component={RegistryGuest}/>
            <Route exact={true} path='/reg/owner/:user_name' component={RegistryOwner}/>
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
