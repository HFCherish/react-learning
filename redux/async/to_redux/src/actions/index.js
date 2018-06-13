export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
});

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  json
});

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const fetchPostsIfNeeded = selectedSubreddit => (dispatch, getState) => {
  if (shouldFetchPosts(selectedSubreddit, getState(), dispatch)) {
    fetchPosts(selectedSubreddit, dispatch);
  }
};

function shouldFetchPosts(selectedSubreddit, state, dispatch) {
  const cachedPost = state.cachedPosts[selectedSubreddit];

  if (!cachedPost) return true;
  if (cachedPost.isFetching) return false;

  if (cachedPost.isValid && isExpired(cachedPost.lastUpdated, 5)) {
    dispatch(invalidateSubreddit(selectedSubreddit));
    return true;
  }
  return !cachedPost.isValid;
}

function isExpired(lastUpdated, expirationMinutes) {
  return new Date() - lastUpdated > expirationMinutes * 60 * 1000;
}

function fetchPosts(selectedSubreddit, dispatch) {
  dispatch(requestPosts(selectedSubreddit));

  fetch(`https://www.reddit.com/r/${selectedSubreddit}.json`)
    .then(res => res.json())
    .then(json => {
      dispatch(receivePosts(selectedSubreddit, json));
    });
}