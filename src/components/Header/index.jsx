import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
  } from 'reactstrap';

const borderContainerStyle = {
    'borderBottom' : '1px solid rgba(0,0,0,0.25)'
};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <Navbar>
                <Container>
                    <NavbarBrand><h1>Tweets Near Here</h1></NavbarBrand>
                </Container>
            </Navbar>
        );
    }
}

export default Header;