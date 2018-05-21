import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer.js';
import { Provider } from 'react-redux';
import { addComment } from './actions.js';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('# your second comment'));
store.dispatch(addComment('# your first comment'));


registerServiceWorker();
