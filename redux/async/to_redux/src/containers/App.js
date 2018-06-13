import React, {Component} from 'react';
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import {connect} from 'react-redux';
import {selectSubreddit, requestPosts, receivePosts, invalidateSubreddit} from '../actions'

class App extends Component {
  state = {
    cachedPosts: {}
  };

  componentDidMount() {
    this.fetchPostsIfNeeded(this.props.selectedSubreddit);
  }

  fetchPostsIfNeeded(selectedSubreddit) {
    if (this.shouldFetchPosts(selectedSubreddit)) {
      this.fetchPosts(selectedSubreddit);
    }
  }

  shouldFetchPosts(selectedSubreddit) {
    // const cachedPost = this.state.cachedPosts[selectedSubreddit];
    //
    // if (!cachedPost) return true;
    // if (cachedPost.isFetching) return false;
    //
    // if (cachedPost.isValid && this.isExpired(cachedPost.lastUpdated, 5)) {
    //   this.setState(this.invalidateSubreddit(selectedSubreddit));
    //   return true;
    // }
    // return !cachedPost.isValid;
    return true;
  }

  isExpired(lastUpdated, expirationMinutes) {
    return new Date() - lastUpdated > expirationMinutes * 60 * 1000;
  }

  fetchPosts(selectedSubreddit) {
    this.props.dispatch(requestPosts(selectedSubreddit));

    fetch(`https://www.reddit.com/r/${selectedSubreddit}.json`)
      .then(res => res.json())
      .then(json => {
        this.setState(state => ({
          cachedPosts: {
            ...state.cachedPosts,
            [selectedSubreddit]: {
              ...this.defaultPosts(),
              ...state.cachedPosts[selectedSubreddit],
              data: json.data.children,
            }
          }
        }));
        this.props.dispatch(receivePosts(selectedSubreddit));
      });
  }

  onSelect = (subreddit) => {
    this.props.dispatch(selectSubreddit(subreddit));
    this.fetchPostsIfNeeded(subreddit)
  }

  refresh = e => {
    e.preventDefault();
    const selectedSubreddit = this.props.selectedSubreddit;
    this.props.dispatch(invalidateSubreddit(selectedSubreddit));
    this.fetchPostsIfNeeded(selectedSubreddit);
  }

  render() {
    const selectedSubreddit = this.props.selectedSubreddit;
    const {cachedPosts} = this.state;
    const selectedPosts = cachedPosts[selectedSubreddit] || this.defaultPosts();

    const isFetching = this.props.isFetching;
    const lastUpdated = this.props.lastUpdated;
    return (
      <div>
        <Picker subreddit={selectedSubreddit} onSelect={this.onSelect} options={['reactjs', 'frontend']}/>
        <p>
          {lastUpdated &&
          <span>last updated at: {lastUpdated.toLocaleTimeString()}. {' '}</span>}
          {!isFetching && <button onClick={this.refresh}>refresh</button>}
        </p>
        {selectedPosts.data.length === 0 ?
          isFetching ?
            <span>Loading...</span>
            : <span>Empty</span>
          : <div style={{opacity: isFetching ? 0.5 : 1}}><Posts posts={selectedPosts.data}/></div>
        }
      </div>
    );
  }

  defaultPosts() {
    return {
      data: [],
    };
  }
}

const mapStateToProps = state => {
  const {selectedSubreddit, cachedPosts} = state;

  const {
    isFetching,
    lastUpdated
  } = cachedPosts[selectedSubreddit] || {
    isFetching: false,
  };

  return {
    selectedSubreddit,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
