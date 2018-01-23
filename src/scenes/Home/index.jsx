import React, { Component } from 'react';
import {createStore} from 'redux';

import Header from '../../components/Header';
import tnhApp from '../../services/fun/fun.reducer';
import { haveFun } from '../../services/fun/fun.actions';

let store = createStore(tnhApp);
console.log('created store', store);

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <p>Home page let's do things</p>
            </div>
        );
    }
}

export default Home;
