import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }

  render() {
    return (
      <Navbar className="container-fluid navbar-light" expand="md">
        <div className="container">
          <NavbarBrand className="text-light nav-link">
            <NavLink className="text-light nav-link" to="/home">
              <h2>Priority Pulse</h2>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav}>
            <span className="text-light fa fa-list fa-lg"></span>
          </NavbarToggler>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-light nav-link" to="/register">
                  <h5>Regester</h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light nav-link" to="/login">
                  <h5>Login</h5>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

export default HeaderComponent
