import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import {store} from '../store/store';
//components
import Cong from '../components/Cong';
import Tru from '../components/Tru';
import SagaEx from '../components/SagaEx';
import Login from '../components/Login';

import Header from '../components/Header';
export default class App extends Component {
 
  render() {
      const state = store.getState(); 
      const { fetching, dog, error } = state.SagaExReducer; 
      
      return (
        <div>
            <Header/>
            <Switch>
            <Route exact path="/" component={Cong}/>
            <Route path="/cong" component={Cong} />
            <Route path="/tru" component={Tru} />
            <Route path="/login" component={Login} />
            <Route path="/SagaEx" component={SagaEx} />
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