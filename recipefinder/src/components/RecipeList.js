import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    let { recipes, favoriteRecipes } = this.props;
    return (
      <div>
      {
        favoriteRecipes.length === 0
          ?
            <div />
          :
            <h4 className="link">
              <Link to='/favorites'>Favorites</Link>
            </h4>
      }
      {
        recipes.map((recipe, index) => {
          return (
            <RecipeItem
              key={index}
              recipe={recipe}
              favoriteButton={true}
            />
          )
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);