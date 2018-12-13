import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';

import {store} from '../store/store';
//components
import Login from '../components/Login';

import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';
import Admin from '../components/Admin';
import Logout from '../components/Logout';
import Home from '../components/Home';
import Calc from '../components/Calc';
import NoMatch from '../components/NoMatch';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { translate, Trans } from 'react-i18next';
import Languages from '../components/Languages';


class App extends Component {
  componentDidMount(){
    console.log("---App: componentDidMount");
  }
  constructor(props){
    super(props);
    this.state = {
      authed:false
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }
  onRouteChanged() {
    const state = store.getState();
    const _authed = state.authReducer.islogged;
    const _isopen = state.reactstrapReducer.navbar_isopen;
    if(_isopen === true){
      store.dispatch({type:"REACTSTRAP_NAVBAR_TOGGLE"});
    }
  }

  render() {
      const state = store.getState(); 
      const _authed = state.authReducer.islogged
      const _location = this.props.location;
      return (
        <div>
            <Header {...this.props}/>
            <div className="content">
              <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home} />
              <Route path="/calc" component={Calc} />
              <Route path="/login" component={Login} />
              <PrivateRoute authed={_authed} path="/logout" component={Logout} />
              <PrivateRoute authed={_authed} path='/admin' component={Admin} />
              <Route component={NoMatch} />
              </Switch>
            </div>
            {/*anymore*/}
        </div>
      );
  }
}
export default translate('common')(App);