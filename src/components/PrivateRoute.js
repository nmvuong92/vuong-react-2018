import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
export default function  PrivateRoute ({component: SSS, authed, ...rest}){
    
    return (
      <Route {...rest}
        render={
          (props) => authed === true
          ? <SSS {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        }/>
    )
}