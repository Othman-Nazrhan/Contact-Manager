import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
const Navbar = (props) => {

  const { title } = props;

  return (

    <nav className="navbar navbar-expand-sm navbar-light bg-success">
      <a className="navbar-brand" href="#">{title}</a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
        <li className="nav-item active">
          {/* Link in component in react router dom */}
          <Link className="nav-link" to="/">Home </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/AddContact">Add </Link>
        </li>

      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
export default Navbar;
