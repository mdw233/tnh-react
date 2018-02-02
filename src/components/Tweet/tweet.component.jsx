import React from 'react';

import TweetHeader from './components/tweet-header.component';


const tweetContainer = {
    'backgroundColor': 'white',
    'borderRadius': '8px',
    'borderStyle': 'solid',
    'display': 'grid',
    'gridTemplateColumns': '100px 1fr 40px',
    'gridRemplateRows': '100%',
    'padding': '10px',
    'margin': '10px 0px'
}

const tweetContent = {
    'color': 'red'
}

const avatar = {
    'height': '48px',
    'width': '48px',
    'borderRadius': '50%',
    
}

const Tweet = ({displayName, userName, avatarSrc, content, place, when, tweetId}) => {
    return (
    <div style={tweetContainer} className="primary-border-color">
        <div>
            <img style={avatar} src={avatarSrc} />
        </div>
        <div className="primary-text-color">
            <div>
                {displayName} @{userName}
            </div>
            <div>
                {place} : {when}
            </div>
            <div>{content}</div>
        </div>
        <div>
            <a target="_blank" href={`https://twitter.com/statuses/${tweetId}`}><i className="fa fa-external-link" aria-hidden="true" /></a>
        </div>
    </div>
    )
}

export default Tweet