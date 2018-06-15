import {combineReducers} from 'redux';
import {RECEIVE_POSTS, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS} from '../actions';

const posts = (state={
  isFetching: false,
  isValid: false,
  data: []}, action) => {
    switch (action.type) {
      case REQUEST_POSTS:
        return {
          ...state,
          isFetching: true
        }
      case RECEIVE_POSTS:
        return {
          ...state,
          data: action.data,
          selectedSubreddit: action.subreddit,
          lastUpdated: new Date(),
          isFetching: false,
          isValid: true
        }
      case INVALIDATE_SUBREDDIT:
        return {
          ...state,
          isValid: false
        }
      default:
        return state
    }
  };

  const cachedPosts = (state = {}, action ) => {
    switch (action.type) {
      case REQUEST_POSTS:
      case RECEIVE_POSTS:
      case INVALIDATE_SUBREDDIT:
        return {
          ...state,
          [action.subreddit]: posts(state[action.subreddit], action)
        }
      default:
        return state;
    }
  }

  const selectedSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
      case SELECT_SUBREDDIT:
        return action.subreddit;
      default:
        return state;
    }
  }

export default combineReducers({cachedPosts, selectedSubreddit});
