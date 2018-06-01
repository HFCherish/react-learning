import React, {Component} from 'react';

const Picker = ({subreddit, onSelect, options}) => (
  <span>
    <h1>{subreddit}</h1>
    <select onChange={event => onSelect(event.target.value)}>
      {
        options.map(option => (
          <option value={option}>{option}</option>
        ))
      }
    </select>
  </span>
);

const Posts = ({posts}) => (
  <ul>
    {
      posts.map(post => (
        <li>{post.data.title}</li>
      ))
    }
  </ul>
);

class App extends Component {
  state = {
    selectedSubreddit: 'reactjs',
    posts: [],
    lastUpdated: new Date(),
    isFetching: false
  };

  componentDidMount() {
    this.fetchPosts(this.state.selectedSubreddit);
  }

  fetchPosts(selectedSubreddit) {
    this.setState({
      ...this.state,
      isFetching: true
    });

    fetch(`https://www.reddit.com/r/${selectedSubreddit}.json`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          ...this.state,
          selectedSubreddit: selectedSubreddit,
          posts: json.data.children,
          lastUpdated: new Date(),
          isFetching: false
        })
      });
  }

  onSelect = (selectedSubreddit) => this.fetchPosts(selectedSubreddit)

  refresh = e => {
    e.preventDefault();
    this.fetchPosts(this.state.selectedSubreddit);
  }

  render() {
    return (
      <div>
        <Picker subreddit={this.state.selectedSubreddit} onSelect={this.onSelect} options={['reactjs', 'frontend']}/>
        <p>
          <span>last updated at: {this.state.lastUpdated.toLocaleTimeString()}. {' '}</span>
          <button onClick={this.refresh}>refresh</button>
        </p>
        {this.state.posts.length === 0 ?
          this.state.isFetching ?
            <span>Loading...</span>
            : <span>Empth</span>
          : <div style={{opacity: this.state.isFetching ? 0.5 : 1}}><Posts posts={this.state.posts}/></div>
        }
      </div>
    );
  }
}

export default App;
