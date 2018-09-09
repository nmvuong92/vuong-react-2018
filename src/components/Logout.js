import React, {Component} from 'react';
import { logout } from '../actions/authorizeAction';
import {store} from '../store/store';

export default class Logout extends Component {
    componentWillMount () {
        store.dispatch(logout());
        this.props.history.push('/home');
    }

    render () {
        return null;
    }
};