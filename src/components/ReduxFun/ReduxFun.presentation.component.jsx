import React from 'react';
import PropTypes from 'prop-types';

const PresentationComponent = ({text, onScreamClick}) => {
    return <h1 onClick={onScreamClick}>{text}</h1>;
}

PresentationComponent.propTypes = {
    text: PropTypes.string.isRequired
}

export default PresentationComponent