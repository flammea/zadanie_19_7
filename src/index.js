import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer.js';
import { Provider } from 'react-redux';
import { addComment } from './actions.js';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

registerServiceWorker();
