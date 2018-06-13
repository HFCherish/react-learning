import {combineReducers} from 'redux';
import {RECEIVE_POSTS, REQUEST_POSTS, SELECT_SUBREDDIT} from '../actions'

const selectedSubreddit = (state='reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}
const cachedPosts = (state={}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: {
          ...state[action.subreddit],
          isFetching: true
        }
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.subreddit]: {
          ...state[action.subreddit],
          isFetching: false
        }
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({selectedSubreddit, cachedPosts});

export default rootReducer;