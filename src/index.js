import React from 'react';
import ReactDOM from 'react-dom';
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

store.dispatch(addComment('# drugi komentarz'));
store.dispatch(addComment('# pierwszy komentarz'));


registerServiceWorker();
