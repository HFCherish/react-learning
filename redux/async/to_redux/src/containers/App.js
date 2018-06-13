import React, {Component} from 'react';
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import {connect} from 'react-redux';
import {selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded} from '../actions'
import PropTypes from 'prop-types'

class App extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    selectSubreddit: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number
  }

  componentDidMount() {
    this.props.dispatch(fetchPostsIfNeeded(this.props.selectedSubreddit));
  }

  onSelect = (subreddit) => {
    this.props.dispatch(selectSubreddit(subreddit));
    this.props.dispatch(fetchPostsIfNeeded(subreddit));
  }

  refresh = e => {
    e.preventDefault();
    const selectedSubreddit = this.props.selectedSubreddit;
    this.props.dispatch(invalidateSubreddit(selectedSubreddit));
    this.props.dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const {
      selectedSubreddit,
      isFetching,
      lastUpdated,
      data
    } = this.props;

    return (
      <div>
        <Picker subreddit={selectedSubreddit} onSelect={this.onSelect} options={['reactjs', 'frontend']}/>
        <p>
          {lastUpdated &&
          <span>last updated at: {lastUpdated.toLocaleTimeString()}. {' '}</span>}
          {!isFetching && <button onClick={this.refresh}>refresh</button>}
        </p>
        {data.length === 0 ?
          isFetching ?
            <span>Loading...</span>
            : <span>Empty</span>
          : <div style={{opacity: isFetching ? 0.5 : 1}}><Posts posts={data}/></div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {selectedSubreddit, cachedPosts} = state;

  const {
    isFetching,
    lastUpdated,
    data
  } = cachedPosts[selectedSubreddit] || {
    isFetching: false,
    data: []
  };

  return {
    selectedSubreddit,
    isFetching,
    lastUpdated,
    data
  };
};

export default connect(mapStateToProps)(App);
