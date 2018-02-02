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

const hr = {
    'height': '4px',
    'border': 'none',
    'backgroundColor': '#BC0100'
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div>
            <Navbar>
                <Container>
                    <NavbarBrand><h1>Tweets Near Here</h1></NavbarBrand>
                </Container>
            </Navbar>

            <hr className="primary-border-color" style={hr} />

            </div>
        );
    }
}

export default Header;