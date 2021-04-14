import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
    return (
        <header>
            <Navbar bg="primary" varient="dark" expand="lg" className="text-white">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >GOF</Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>
                       
                        <LinkContainer to="/account">
                            <Nav.Link ><i className="fas fa-user"></i> Account</Nav.Link>
                        </LinkContainer>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </header>
    )
}

export default Header
