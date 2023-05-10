import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">API</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Users">Users</Nav.Link>
                <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
                <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
                <Nav.Link href="/Admin Interface">Admin Interface</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
    </div>
  )
}

export default NavBar