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
      })
    })
  }

  render() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
        <FlatList data={this.state.movies} renderItem={({item: movie}) => this.renderMovie(movie)}/>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载，请稍候...</Text>
      </View>
    )
  }

  renderMovie(movie) {
    return (
      <View style={styles.movieContainer}>
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
  container: {
    flex: 1,
    margin: 20,
  },
  movieInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginLeft: 20
  },
  movieContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 16,
    textAlign: 'left'
  },
  year: {
    fontSize: 12,
    color: 'gray'
  }
});
