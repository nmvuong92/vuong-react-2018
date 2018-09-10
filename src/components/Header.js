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
import Languages from './Languages';
import {FormattedMessage} from 'react-intl';
import moment from 'moment';

class Header extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          name       : 'Eric',
          unreadCount: 1000,
        };
    }
    toggle() {
        store.dispatch({type:"REACTSTRAP_NAVBAR_TOGGLE"});
    }
    render(){
        const state = store.getState();
        const _authed = state.authReducer.islogged;
        const _isopen = state.reactstrapReducer.navbar_isopen;
        const { t } = this.props;
        const {name, unreadCount} = this.state;
        return(
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={_isopen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink exact  to="/"  className="nav-link">Home {_isopen.toString()}</NavLink>
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
                <Languages {...this.props} />
                { t('welcome.title', { framework: "react-i18next" }) }
                <p>
                    <FormattedMessage
                        id="welcome"
                        defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                        one {message}
                        other {messages}
                        }`}
                        values={{name: <b>{name}</b>, unreadCount}}
                    />
                </p>
                <p>{moment(new Date()).format()}</p>
            </div>
        );
    };
}
export default Header;