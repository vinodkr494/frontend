import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'


function Header() {
    return (
        <header>
            <Navbar bg="primary" varient="dark" expand="lg" className="text-white">
                <Container>
                    <Navbar.Brand href="/">GOF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        <Nav.Link href="/account"><i className="fas fa-user"></i> Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </header>
    )
}

export default Header
