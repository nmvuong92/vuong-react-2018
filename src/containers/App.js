import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import {store} from '../store/store';
//components
import SagaEx from '../components/SagaEx';
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
      const { fetching, dog, error } = state.SagaExReducer; 
      const _authed = state.authReducer.islogged
      return (
        <div>
            <Header/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/calc" component={Calc} />
            <Route path="/login" component={Login} />
            <Route path="/SagaEx" component={SagaEx} />
            <Route path="/logout" component={Logout} />
            <PrivateRoute authed={_authed} path='/admin' component={Admin} />
            </Switch>

            {dog ? (
              <p className="App-intro">Keep clicking for new dogs</p>
            ) : (
              <p className="App-intro">Replace the React icon with a dog!</p>
            )}

            {fetching ? (
              <button disabled>Fetching...</button>
            ) : (
              <button onClick={()=>{
                store.dispatch({type:'API_CALL_REQUEST'});
              }}>Request a Dog</button>
            )}

            {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        </div>
      );
  }
}