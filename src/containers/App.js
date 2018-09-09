import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import {store} from '../store/store';
//components
import Login from '../components/Login';

import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';
import Admin from '../components/Admin';
import Logout from '../components/Logout';
import Home from '../components/Home';
import Calc from '../components/Calc';
export default class App extends Component {
  constructor(props){
   
    super(props);
    this.state = {
      authed:false
    }
  }
 
  render() {
      const state = store.getState(); 
      const _authed = state.authReducer.islogged
      return (
        <div>
            <Header/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home} />
            <Route path="/calc" component={Calc} />
            <Route path="/login" component={Login} />
            <PrivateRoute authed={_authed} path="/logout" component={Logout} />
            <PrivateRoute authed={_authed} path='/admin' component={Admin} />
            </Switch>
            
            {/*anymore*/}
        </div>
      );
  }
}