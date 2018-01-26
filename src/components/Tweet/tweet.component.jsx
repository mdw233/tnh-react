import React from 'react';

import TweetHeader from './components/tweet-header.component';


const tweetContainer = {
    'border-width': '1px',
    'border-style': 'solid',
    'display': 'grid',
    'grid-template-columns': '100px 1fr 40px',
    'grid-template-rows': '100%',
    'padding': '10px'
}

const avatar = {
    'height': '48px',
    'width': '48px',
    'border-radius': '50%',
}

const Tweet = ({displayName, userName, avatarSrc, content, place, when, tweetId}) => {
    return (
    <div style={tweetContainer} className="primary-border-color">
        <div>
            <img style={avatar} src={avatarSrc} />
        </div>
        <div>
            <div>
                {displayName} 
            </div>
            <div>
                {place} : {when}
            </div>
            <div>@{userName}</div>
            <div>{content}</div>
        </div>
        <div>
            <a target="_blank" href={`https://twitter.com/statuses/${tweetId}`}><i className="fa fa-external-link" aria-hidden="true" /></a>
        </div>
    </div>
    )
}

export default Tweet