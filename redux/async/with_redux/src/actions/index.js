export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  data: json.data.children.map(child => child.data),
  subreddit
});


export const fetchPosts = subreddit => (dispatch) => {
  fetch(`https://www.reddit.com/r/${subreddit}.json`)
  .then(res => res.json())
  .then(json => dispatch(receivePosts(subreddit, json)));
}
