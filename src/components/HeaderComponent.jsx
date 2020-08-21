import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function HeaderComponent() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <nav className="pt-3 container-fluid navbar navbar-expand-md">
      <div className="container">
        <NavLink className="navbar-brand text-light " to="/home">
          <h2 className="">Priority Pulse</h2>
        </NavLink>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="fa fa-list fa-lg text-light"></span>
        </button>
        <div
          class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse ml-auto`}
          id="navbarsExample09"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/register">
                <h5>Register</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/login">
                <h5>Login</h5>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent
