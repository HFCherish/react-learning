import {combineReducers} from 'redux';
import {RECEIVE_POSTS, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS} from '../actions';

const posts = (state={
  isFetching: false,
  selectedSubreddit: 'reactjs',
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
      case SELECT_SUBREDDIT:
        return {
          ...state,
          selectedSubreddit: action.subreddit,
          isFetching: false
        }
      case INVALIDATE_SUBREDDIT:
        return {
          ...state,
          isFetching: false,
          isValid: false
        }
      default:
        return state

    }
  };

export default combineReducers({posts});
