import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//sss
class Header extends Component{
    render(){
        return(
            <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/calc" className="nav-link">Calc</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SagaEx" className="nav-link">SagaEx</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link">logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">Admin</Link>
                    </li>
            </ul>
        );
    };
}
export default Header;