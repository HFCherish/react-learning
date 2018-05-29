import React from 'react';
import * as ReactDOM from "react-dom";
// import Counter from "./Counter";
import Counter from "./CounterWithRedux";
import counter from "./reducer";
import {createStore} from 'redux';

const store = createStore(counter);


const render = () => ReactDOM.render(
  <Counter store={store}/>,
  document.getElementById('root')
);

render();
store.subscribe(render);

