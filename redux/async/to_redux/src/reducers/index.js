import {combineReducers} from 'redux';
import {SELECT_SUBREDDIT} from '../actions'

const selectedSubreddit = (state='reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
  return state;
}

const rootReducer = combineReducers({selectedSubreddit});

export default rootReducer;