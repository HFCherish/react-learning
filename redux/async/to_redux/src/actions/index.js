export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
});

export const receivePosts = subreddit => ({
  type: RECEIVE_POSTS,
  subreddit
});