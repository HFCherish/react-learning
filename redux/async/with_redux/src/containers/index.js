import React, {Component} from 'react';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts(this.props.selectedSubreddit));
  }

  refresh = () => {}

  onSelect = nextSelected => {}

  render() {
    const {lastUpdated, isFetching, data, selectedSubreddit} = this.props;

    return (<div>
      <Picker onSelect={this.onSelect} options={['reactjs', 'frontend']} selected={selectedSubreddit}/>
      <p>
        {lastUpdated && <span>lastUpdated at {lastUpdated.toLocaleString()}</span>}
        {' '}
        {lastUpdated && !isFetching && <button onClick={this.refresh}>Refresh</button>}
      </p>
      {
        data.length === 0
          ? <span>{isFetching? 'Loading' : 'Empty'}</span>
          : <div style={{opacity: isFetching ? 0.5 : 1}}><Posts data={data}/></div>
      }
    </div>);
  }
}

const mapStateToProps = state => {
  const {
    isFetching,
    data,
    lastUpdated,
    selectedSubreddit
  } = state.posts;

  return {
    isFetching,
    data,
    lastUpdated,
    selectedSubreddit
  };
}

export default connect(mapStateToProps)(App);
