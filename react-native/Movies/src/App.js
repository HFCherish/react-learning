/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ServerClient from './ServerClient';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const MOCKED_MOVIES = [
  {
    title: 'Flipped',
    year: 2010,
    posters: {
      thumbnail: 'http://i.imgur.com/UePbdph.jpg'
    }
  }
];

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type
Props = {};
export default class App extends Component<Props> {
  state = {
    movies: null,
    test: "shold be this state"
  };

  componentDidMount() {
    ServerClient.getMovies(data => {
      this.setState({movies: data.movies});
    });
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据...</Text>
      </View>
    );
  }

  render() {
    if(!this.state.movies) {
      return this.renderLoadingView();
    }

    let movie = this.state.movies[0];
    return (
      <Movie movie={movie} />
    );
  }
}

class Movie extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}}
               style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
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
    margin: 10
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  year: {
    fontSize: 12,
    color: '#404956'
  }

});
