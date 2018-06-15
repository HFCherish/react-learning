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

export const fetchPosts = subreddit => (dispatch) => {
  dispatch(requestPosts(subreddit));
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then(res => res.json())
  .then(json => dispatch(receivePosts(subreddit, json)));
}

export const selecetSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})
