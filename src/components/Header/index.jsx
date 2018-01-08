import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        setInterval(() => 
            this.props.handleChange({target: {value: "xxxxxx"}}) , 
        3000);
    }    

    render() {
        return (
            <div>
                <h1>header</h1>
                <p>Junk is: {this.props.junk}</p>
            </div>
        );
    }
}

export default Header;