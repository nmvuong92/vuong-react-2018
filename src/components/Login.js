import React, {Component} from 'react';
import GatorForm from './GatorForm';
import {store } from '../store/store';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
export default class Login extends Component{  
    redirectToHome(){
        this.props.history.push('/');
    }
    render() {
        console.log(this.props);
        const state = store.getState();
        const _authed = state.authReducer.islogged;
        const _location = this.props.location;
        return(
            !_authed?<GatorForm/>:
            <Redirect to={{pathname: '/', state: {from: _location}}} />
        );
    }
}