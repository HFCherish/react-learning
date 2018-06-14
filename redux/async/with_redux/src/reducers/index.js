import {combineReducers} from 'redux';

const posts = (state={
  isFetching: false,
  selectedSubreddit: 'reactjs',
  lastUpdated: new Date(),
  data: [
    {'title': 'balabal'},
    {'title': 'fjkdl'},
    {'title': 'dslkkf'},
  ]}, action) => state;

export default combineReducers({posts});
