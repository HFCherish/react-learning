import {combineReducers} from 'redux';

const selectedSubreddit = (state='test', action) => {
  return state;
}

const rootReducer = combineReducers({selectedSubreddit});

export default rootReducer;