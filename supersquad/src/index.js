import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

import { addCharacterById } from './actions';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('state', store.getState()));
store.dispatch(addCharacterById(1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)