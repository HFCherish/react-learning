import {combineReducers} from 'redux';
import {INVALIDATE_SUBREDDIT, RECEIVE_POSTS, REQUEST_POSTS, SELECT_SUBREDDIT} from '../actions'

const selectedSubreddit = (state='reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}


const posts = (state = {
  isFetching: false,
  isValid: false
}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        isValid: false
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        isValid: true
      }
    default:
      return state
  }
}

const cachedPosts = (state={}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({selectedSubreddit, cachedPosts});

export default rootReducer;