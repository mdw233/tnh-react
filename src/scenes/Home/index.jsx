import React, { Component } from 'react';

import Header from '../../components/Header'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            junk: "",
            things: ["a", "b"]
        };
    }

    handleChange(e) {
        console.log(e.target.value);
        console.log(this);
        this.setState({junk: e.target.value});
        this.addThing(e.target.value);
    }

    addThing(thing) {
        let t = this.state.things;
        let things = t.slice(0, t.length);
        things.push(thing);
        this.setState({things: things});
    }

    render() {
        return (
            <div>
                <Header 
                    junk={this.state.junk} 
                    things={this.state.things} 
                    addThing={(t) => this.addThing(t)} 
                    handleChange={(e) => this.handleChange(e)} />

                <div>This is home</div>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                <div>{this.state.junk}</div>
            </div>
        );
    }
}

export default Home;