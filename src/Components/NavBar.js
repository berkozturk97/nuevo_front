import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { history } from '../App';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <span onClick={() => history.push({ pathname: "/" })} className="brandText" >Nuevo</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link >
                        <span onClick={() => history.push({ pathname: "/create" })} className="pages">Add New Book</span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavigationBar;