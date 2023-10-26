import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <div>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
