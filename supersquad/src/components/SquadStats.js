import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  stats() {
    let strength = 0, intelligence = 0, speed = 0;
    this.props.heroes.map(hero => {
      strength += hero.strength;
      intelligence += hero.intelligence;
      speed += hero.speed;
    });

    return { strength, intelligence, speed };
  }

  render() {
    let { strength, intelligence, speed } = this.stats();

    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength:</b> {strength}
          </li>
          <li className="list-group-item">
            <b>Overall Intelligence: </b> {intelligence}
          </li>
          <li className="list-group-item">
            <b>Overall Speed: </b> {speed}
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(mapStateToProps, null)(SquadStats);