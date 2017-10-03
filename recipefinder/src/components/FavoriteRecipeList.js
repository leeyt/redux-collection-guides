import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends Component {
  render() {
    let { favoriteRecipes } = this.props;

    return (
      <div>
        <h4 className="link">
          <Link to='/'>Home</Link>
        </h4>
        <h4>Favorite Recipes:</h4>
        {
          favoriteRecipes.map((recipe, index) => {
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
    favoriteRecipes: state.favoriteRecipes
  }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);