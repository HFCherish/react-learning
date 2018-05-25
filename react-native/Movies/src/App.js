/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


const MOVIE = {
  title: 'test',
  year: 2015,
  posters: {
    thumbnail: 'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    let movie = MOVIE;
    return (
      <View style={styles.container}>
        <Image source={require('./greyson-chance.jpg')} style={styles.thumbnail} />
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 20
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
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  year: {
    fontSize: 12,
    textAlign: 'center',
    color: 'gray'
  },
});
