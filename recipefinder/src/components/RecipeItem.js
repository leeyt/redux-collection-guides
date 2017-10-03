import React, { Component } from 'react';
import { connect } from 'react-redux';

import { favoriteRecipe } from '../actions'

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;

    return (
      <div className="recipe-item">
        <div
          className="star"
          onClick={() => this.props.favoriteRecipe(this.props.recipe)}
        >
          &#9734;
        </div>
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img
          className="recipe-img"
          src={recipe.thumbnail}
          alt={recipe.title}
        />
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);