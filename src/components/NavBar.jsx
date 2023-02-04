import React from 'react'
import './styles/NavBar.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-weight-bold">Steve's Jobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/employer-dashboard" className="font-weight-bold">Employer</Nav.Link>
            <Nav.Link as={Link} to="/job-seeker-dashboard" className="font-weight-bold">Jobseeker</Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="font-weight-bold">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/login" className="font-weight-bold">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

