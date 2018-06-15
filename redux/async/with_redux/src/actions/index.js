export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  data: json.data.children.map(child => child.data),
  subreddit
});

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit
});

const shouldFetchPosts = (subreddit, state, dispatch) => {
  const selectedPosts = state.cachedPosts[subreddit];
  if( !selectedPosts )  return true;
  if( selectedPosts.isFetching )  return false;
  if( selectedPosts.isValid && expired(selectedPosts.lastUpdated, 5) ) {
    dispatch(invalidateSubreddit(subreddit));
    return true;
  }
  return !selectedPosts.isValid;
}

const expired = (realDate, expirationMinutes ) => {
  return new Date() - realDate > expirationMinutes * 60 * 1000
}

export const fetchPosts = subreddit => (dispatch, getState) => {
  if(shouldFetchPosts(subreddit, getState(), dispatch)) {
    dispatch(requestPosts(subreddit));
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => res.json())
    .then(json => dispatch(receivePosts(subreddit, json)));
  }
}

export const selecetSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})
