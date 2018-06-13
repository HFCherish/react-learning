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