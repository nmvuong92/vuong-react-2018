import React, { Component } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import { store } from '../store/store';
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as RRNavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        const state = store.getState();
        const _authed = state.authReducer.islogged;
        return(
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink exact  to="/"  className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/calc" className="nav-link"  activeClassName="active">Calc</NavLink>
                    </NavItem>                   
                    {
                            !_authed?
                                <NavItem>
                                    <NavLink exact to="/login" className="nav-link"  activeClassName="active">Login</NavLink>
                                </NavItem>:null
                            }
                            {
                                _authed?
                                <NavItem>
                                    <NavLink exact to="/admin" className="nav-link"  activeClassName="active">Admin</NavLink>
                                </NavItem>:null
                            }
                            {
                                _authed?
                                <NavItem>
                                    <NavLink exact to="/logout" className="nav-link"  activeClassName="active">logout</NavLink>
                                </NavItem>:null
                            }
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    };
}
export default Header;