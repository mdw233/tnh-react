import React, { Component } from 'react';
import {createStore} from 'redux';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import SearchForm from '../../components/Search/search.component'
import tnhApp from '../../services/fun/fun.reducer';
import { haveFun } from '../../services/fun/fun.actions';
import Tweet from '../../components/Tweet/tweet.component';

let store = createStore(tnhApp);
console.log('created stores', store);

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Link to="/About">About</Link>
                <SearchForm />
                <Tweet 
                    displayName="Matt Gajtka"
                    userName="MattGajtka"
                    place="West View, PA"
                    when="Dec 7 2017 - 6:16 PM"
                    avatarSrc="http://pbs.twimg.com/profile_images/884513716892512257/fsI5JbR4_normal.jpg"
                    content="Yes, these are the 2017 Steelers"
                    tweetId="942549142919958528" />
                    
                <Tweet 
                    displayName="Matt Gajtka"
                    userName="MattGajtka"
                    place="West View, PA"
                    when="Dec 7 2017 - 6:16 PM"
                    avatarSrc="http://pbs.twimg.com/profile_images/884513716892512257/fsI5JbR4_normal.jpg"
                    content="Yes, these are the 2017 Steelers"
                    tweetId="942549142919958528" />
            </div>
        );
    }
}

export default Home;
