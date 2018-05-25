/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import Client from './Client';

type Props = {};
export default class MovieList extends Component<Props> {
  state = {
    movies: [],
    loaded: false
  }

  componentDidMount() {
    Client.getMovies(json => {
      this.setState({
        movies: this.state.movies.concat(json.movies),
        loaded: true
      });
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderWaiting();
    }

    return (
      <View style={styles.listContainer}>
        <FlatList data={this.state.movies} renderItem={({item: movie}) => this.renderMovie(movie)}/>
      </View>
    )
  }

  renderWaiting() {
    return (
      <View style={styles.container}>
        <Text>正在加载，请稍等...</Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.movieInfo}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    margin: 20,
    marginTop: 40,
    marginBottom: 40
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  movieInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 20
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10
  },
  year: {
    fontSize: 12,
    textAlign: 'center',
    color: 'gray'
  },
});
