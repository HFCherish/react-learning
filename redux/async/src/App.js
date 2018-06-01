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
        <li>{post.title}</li>
      ))
    }
  </ul>
);

class App extends Component {
  state = {
    subreddit: 'reactjs',
    posts: [
      {title: 'Beginner\'s Thread / Easy Question (May 2018)'},
      {title: 'Test Driven Development (TDD) in React &amp; React Native'},
      {title: 'The most important lessons I’ve learned after a year of working with React'}
    ],
    lastUpdated: new Date()
  };

  onSelect = (selectedSubreddit) => {
    this.setState({
      ...this.state,
      subreddit: selectedSubreddit
    })
  }

  render() {
    return (
      <div>
        <Picker subreddit={this.state.subreddit} onSelect={this.onSelect} options={['reactjs', 'frontend']} />
        <p>
          <span>last updated at: {this.state.lastUpdated.toLocaleTimeString()}. {' '}</span>
          <button>refresh</button>
        </p>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
