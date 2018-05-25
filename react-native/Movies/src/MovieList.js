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

const MOVIES = [
  {
    title: 'test',
    year: 2394,
    posters: {thumbnail: 'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'}
  },
  {
    title: 'test1',
    year: 2394,
    posters: {thumbnail: 'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'}
  }
]

type Props = {};
export default class MovieList extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={MOVIES} renderItem={({item: movie}) => this.renderMovie(movie)}/>
      </View>
    );
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
