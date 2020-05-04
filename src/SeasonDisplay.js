import React, { Component } from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly!',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};

class SeasonDisplay extends Component {
    render() {
        const season = getSeason(this.props.latitude, new Date().getMonth());
        const { text, iconName } = seasonConfig[season];
        return (
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <h1 className={`${season} title`}>
                    {text}
                </h1>
                <i className={`icon-right massive ${iconName} icon`} />
                <p className="info-bottom">This app decides season based on your location (north hemisphere or south hemisphere) and current month.</p>
            </div>
        );
    }
}

export default SeasonDisplay;