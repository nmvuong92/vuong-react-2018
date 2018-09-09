import React, {Component} from 'react';
import LoginForm from './forms/LoginForm';
import {store } from '../store/store';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';

import { authorize } from '../actions/authorizeAction';
export default class Login extends Component{  
    redirectToHome(){
        this.props.history.push('/');
    }

    submit = val => {
        store.dispatch(authorize(val.txt_username,val.txt_password));
    }

    render() {
        console.log(this.props);
        const state = store.getState();
        const _authed = state.authReducer.islogged;
        const _location = this.props.location;
        const _error = state.authReducer.error;
        return(
            !_authed?<div>
                <LoginForm error={_error} onSubmit={this.submit}/>
                <h2>{_error}</h2>
            </div>:
            <Redirect to={{pathname: '/', state: {from: _location}}} />
        );
    }
}