import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    let { characters } = this.props;

    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {
            characters.map(character => {
              return (
                <li key={character.id}>
                  <div>{character.name}</div>
                  <div
                    onClick={() => this.props.addCharacterById(character.id)}>
                    +
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
    characters: state.characters
  }
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);