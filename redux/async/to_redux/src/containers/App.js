import React, {Component} from 'react';
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import {connect} from 'react-redux';
import {selectSubreddit} from '../actions'

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
    const cachedPost = this.state.cachedPosts[selectedSubreddit];

    if (!cachedPost) return true;
    if (cachedPost.isFetching) return false;

    if (cachedPost.isValid && this.isExpired(cachedPost.lastUpdated, 5)) {
      this.setState(this.invalidateSubreddit(selectedSubreddit));
      return true;
    }
    return !cachedPost.isValid;
  }

  isExpired(lastUpdated, expirationMinutes) {
    return new Date() - lastUpdated > expirationMinutes * 60 * 1000;
  }

  fetchPosts(selectedSubreddit) {
    this.setState(state => ({
      cachedPosts: {
        ...state.cachedPosts,
        [selectedSubreddit]: {
          ...this.defaultPosts(),
          ...state.cachedPosts[selectedSubreddit],
          isFetching: true
        }
      }
    }));

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
              lastUpdated: new Date(),
              isFetching: false,
              isValid: true
            }
          }
        }));
      });
  }

  onSelect = (subreddit) => {
    this.props.dispatch(selectSubreddit(subreddit));
    this.fetchPostsIfNeeded(subreddit)
  }

  refresh = e => {
    e.preventDefault();
    const selectedSubreddit = this.props.selectedSubreddit;
    this.setState(this.invalidateSubreddit(selectedSubreddit), () => this.fetchPostsIfNeeded(selectedSubreddit));
  }

  invalidateSubreddit(selectedSubreddit) {
    return state => ({
      cachedPosts: {
        ...state.cachedPosts,
        [selectedSubreddit]: {
          ...this.defaultPosts(),
          ...state.cachedPosts[selectedSubreddit],
          isValid: false
        }
      }
    });
  }

  render() {
    const selectedSubreddit = this.props.selectedSubreddit;
    const {cachedPosts} = this.state;
    const selectedPosts = cachedPosts[selectedSubreddit] || this.defaultPosts();

    return (
      <div>
        <Picker subreddit={selectedSubreddit} onSelect={this.onSelect} options={['reactjs', 'frontend']}/>
        <p>
          {selectedPosts.lastUpdated &&
          <span>last updated at: {selectedPosts.lastUpdated.toLocaleTimeString()}. {' '}</span>}
          {!selectedPosts.isFetching && <button onClick={this.refresh}>refresh</button>}
        </p>
        {selectedPosts.data.length === 0 ?
          selectedPosts.isFetching ?
            <span>Loading...</span>
            : <span>Empty</span>
          : <div style={{opacity: selectedPosts.isFetching ? 0.5 : 1}}><Posts posts={selectedPosts.data}/></div>
        }
      </div>
    );
  }

  defaultPosts() {
    return {
      data: [],
      isFetching: false,
      isValid: false
    };
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
