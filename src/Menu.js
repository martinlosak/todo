import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const Menu = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">TODO App</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/about">About</Link></NavItem>
        </Nav>
    </Navbar>
)

export default Menu