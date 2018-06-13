import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const store = createStore(
  reducers,
  applyMiddleware(thunk,createLogger())
  );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
