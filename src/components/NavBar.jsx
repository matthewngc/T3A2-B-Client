import React from 'react'
import './styles/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand text-white h3 font-weight-bold" to="/">Steve's Jobs</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white font-weight-bold" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white font-weight-bold" to="/jobs">Jobs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white font-weight-bold" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
