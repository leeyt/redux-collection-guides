import { combineReducers } from 'redux';

import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';

function recipes(state = [], action) {
  switch(action.type) {
  case SET_RECIPES:
    return action.items;
  default:
    return state;
  }
}

function favoriteRecipes(state = [], action) {
  switch(action.type) {
  case FAVORITE_RECIPE:
    let favorites = [ ...state, action.recipe ];
    return favorites;
  default:
    return state;
  }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes })

export default rootReducer;