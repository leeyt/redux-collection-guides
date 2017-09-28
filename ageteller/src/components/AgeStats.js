import React, { Component } from 'react';

class AgeStats extends Component {
  render() {
    console.log(this);
    return (
      <div>{this.props.date}</div>
    )
  }
}

export default AgeStats;