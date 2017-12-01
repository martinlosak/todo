import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>TODO App</Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem><Link to="/">All</Link></NavItem>
            <NavItem><Link to="/active">Active</Link></NavItem>
            <NavItem><Link to="/completed">Complete</Link></NavItem>
        </Nav>
    </Navbar>
)

export default Header