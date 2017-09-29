import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroList extends Component {
  render() {
    let { heroes } = this.props;

    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
        {
          heroes.map(hero => {
            return (
              <li
                key={hero.id}
                className="list-group-item"
              >
                <div
                  className="list-item"
                >
                  {hero.name}
                </div>
                <div
                  className="list-item right-button"
                >
                  x
                </div>
              </li>
            )
          })
        }
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

export default connect(mapStateToProps, null)(HeroList);