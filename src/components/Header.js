import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Cong" className="nav-link">Cong</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Tru" className="nav-link">Tru</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SagaEx" className="nav-link">SagaEx</Link>
                    </li>
            </ul>
        );
    };
}
export default Header;