import React from 'react';
import {render} from 'react-dom';
import App from './containers';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers, {
  posts: {
    isFetching: false,
    selectedSubreddit: 'reactjs',
    lastUpdated: new Date(),
    data: [
      {'title': 'balabal'},
      {'title': 'fjkdl'},
      {'title': 'dslkkf'},
    ]
  }
}, applyMiddleware(createLogger()));

render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'))
