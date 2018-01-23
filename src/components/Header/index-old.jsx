import React, { Component } from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        setInterval(() => {
        }, 
    3000);
    }    

    componentWillMount() {
        console.log("header: componentWillMount");
    }   

    componentDidMount() {
        console.log("header: componentDidMount");
    }  

    componentWillReceiveProps(nextProps) {
        console.log("header: componentWillReceiveProps");
    }  

    componentWillUpdate() {
        console.log("header: componentWillUpdate");
    } 

    componentDidUpdate() {
        console.log("header: componentDidUpdate");
    }

    shouldComponentUpdate() {
        console.log("header: shouldComponentUpdate");
        return true;
    }

    

    render() {

        let listItems = this.props.things.map((t) => <li>{t}</li>);

        return (
            <div>
                <h1>header</h1>
                <p>Junk is: {this.props.junk}</p>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Header;