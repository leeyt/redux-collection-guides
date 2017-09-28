import React, { Component } from 'react';

import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {
  timeSince(date) {
    let today_ms = new Date().getTime();
    let date_ms = new Date(date).getTime();
    let difference = Math.abs(today_ms - date_ms);

    let days = Math.floor(difference / (1000*3600*24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years, ${months} months, ${days} days`;
  }

  render() {
    return (
      <div className="age-stats fade">
        <h4>Congrats on staying alive for {this.timeSince(this.props.date)} on this planet.</h4>
        <img
          className="party-popper"
          src={partyPopper}
          alt="party-popper"
        />
      </div>
    )
  }
}

export default AgeStats;