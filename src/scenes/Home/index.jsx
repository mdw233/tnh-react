import React, { Component } from 'react';

import Header from '../../components/Header'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            junk: ""
        };
    }

    handleChange(e) {
        console.log(e.target.value);
        console.log(this);
        this.setState({junk: e.target.value});
    }

    render() {
        return (
            <div>
                <Header junk={this.state.junk} handleChange={(e) => this.handleChange(e)} />
                <div>This is home</div>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                <div>{this.state.junk}</div>
            </div>
        );
    }
}

export default Home;
