import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends Component {
  render() {
    let { recipes } = this.props;

    return (
      <div>
        <h4>Favorite Recipes</h4>
      {
        recipes.map((recipe, index) => {
          return (
            <RecipeItem
              key={index}
              recipe={recipe}
              favoriteButton={false}
            />
          )
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.favoriteRecipes
  }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);