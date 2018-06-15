import {combineReducers} from 'redux';
import {RECEIVE_POSTS} from '../actions';

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
      default:
        return state

    }
  };

export default combineReducers({posts});
