import React, {Component} from 'react';
import Picker from "../components/Picker";
import Posts from "../components/Posts";

class App extends Component {
  state = {
    selectedSubreddit: 'reactjs',
    cachedPosts: {
      reactjs: {
        data: [],
        lastUpdated: new Date(),
        isFetching: false
      }
    }
  };

  componentDidMount() {
    this.fetchPostsIfNeeded(this.state.selectedSubreddit);
  }

  fetchPostsIfNeeded(selectedSubreddit) {
    this.setState({
      ...this.state,
      cachedPosts: {
        ...this.state.cachedPosts,
        [selectedSubreddit]: {
          ...this.state.cachedPosts[selectedSubreddit],
          isFetching: true
        }
      }
    });

    fetch(`https://www.reddit.com/r/${selectedSubreddit}.json`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          selectedSubreddit: selectedSubreddit,
          cachedPosts: {
            ...this.state.cachedPosts,
            [selectedSubreddit]: {
              ...this.state.cachedPosts[selectedSubreddit],
              data: json.data.children,
              lastUpdated: new Date(),
              isFetching: false
            }
          }
        });
      });
  }

  onSelect = (selectedSubreddit) => this.fetchPostsIfNeeded(selectedSubreddit)

  refresh = e => {
    e.preventDefault();
    this.fetchPostsIfNeeded(this.state.selectedSubreddit);
  }

  render() {
    const {selectedSubreddit, cachedPosts} = this.state;
    const selectedPosts = cachedPosts[selectedSubreddit];

    return (
      <div>
        <Picker subreddit={selectedSubreddit} onSelect={this.onSelect} options={['reactjs', 'frontend']}/>
        <p>
          <span>last updated at: {selectedPosts.lastUpdated.toLocaleTimeString()}. {' '}</span>
          <button onClick={this.refresh}>refresh</button>
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
}

export default App;
