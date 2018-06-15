import React, {Component} from 'react';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
import {connect} from 'react-redux';
import {fetchPosts, selecetSubreddit, invalidateSubreddit} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts(this.props.selectedSubreddit));
  }

  refresh = () => {
    this.props.dispatch(invalidateSubreddit(this.props.selectedSubreddit));
    this.props.dispatch(fetchPosts(this.props.selectedSubreddit));
  }

  onSelect = nextSelected => {
    this.props.dispatch(selecetSubreddit(nextSelected));
    this.props.dispatch(fetchPosts(nextSelected));
  }

  render() {
    const {lastUpdated, isFetching, data, selectedSubreddit, isValid} = this.props;

    return (<div>
      <Picker onSelect={this.onSelect} options={['reactjs', 'frontend']} selected={selectedSubreddit}/>
      <p>
        {lastUpdated && <span>lastUpdated at {lastUpdated.toLocaleString()}</span>}
        {' '}
        {lastUpdated && !isFetching && <button onClick={this.refresh}>Refresh</button>}
      </p>
      {
        data.length === 0
          ? <span>{isFetching? 'Loading...' : 'Empty'}</span>
          : <div style={{opacity: isValid ? 1 : 0.5}}><Posts data={data}/></div>
      }
    </div>);
  }
}

const mapStateToProps = state => {
  const {selectedSubreddit, cachedPosts} = state;
  const {
    isFetching,
    data,
    lastUpdated,
    isValid
  } = cachedPosts[selectedSubreddit] || {
    isFetching: false,
    isValid: false,
    data: []
  };

  return {
    isFetching,
    data,
    lastUpdated,
    selectedSubreddit,
    isValid,
  };
}

export default connect(mapStateToProps)(App);
