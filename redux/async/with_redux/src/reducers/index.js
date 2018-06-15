import {combineReducers} from 'redux';
import {RECEIVE_POSTS, SELECT_SUBREDDIT} from '../actions';

const posts = (state={
  isFetching: false,
  selectedSubreddit: 'reactjs',
  data: []}, action) => {
    switch (action.type) {
      case RECEIVE_POSTS:
        return {
          ...state,
          data: action.data,
          selectedSubreddit: action.subreddit,
          lastUpdated: new Date(),
          isFetching: false
        }
      case SELECT_SUBREDDIT:
        return {
          ...state,
          selectedSubreddit: action.subreddit,
          isFetching: false
        }
      default:
        return state

    }
  };

export default combineReducers({posts});
