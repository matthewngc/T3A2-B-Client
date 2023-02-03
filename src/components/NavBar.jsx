// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";

// const NavBar = () => {
//     return (
//         <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="/">Steve's Jobs</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link href="/">Home</Nav.Link>
//                     <Nav.Link href="profile">Profile</Nav.Link>
//                     <Nav.Link href="jobs">Jobs</Nav.Link>
//                     <Nav.Link href="create">Create Listing</Nav.Link>
//                     <Nav.Link href="login">Sign In</Nav.Link>
//                     <Nav.Link href="register">Register</Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default NavBar;

import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Steve's Jobs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="profile">Profile</Nav.Link>
          <Nav.Link href="jobs">Jobs</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
