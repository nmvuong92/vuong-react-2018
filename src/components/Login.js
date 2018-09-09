import React, {Component} from 'react';
import GatorForm from './GatorForm';
import {store } from '../store/store';
export default class Login extends Component{  
    componentWillMount(){
        const state = store.getState();
        if(state.authReducer.islogged){
            this.props.history.push('/');
        }
    }
    render() {
        return(
            <GatorForm/>
        );
    }
}