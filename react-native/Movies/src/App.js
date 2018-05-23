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
  FlatList,
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
    data: [],
    loaded: false
  };

  componentDidMount() {
    ServerClient.getMovies(json => {
      this.setState({
        data: this.state.data.concat(json.movies),
        loaded: true
      });
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
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>
        {/*这里 renderItem 中必须用 item，这其实是指定 renderItem 中的属性 item，有两个 item、index*/}
        <FlatList style={styles.movieList} data={this.state.data} renderItem={ ({item: movie}) => <Movie movie={movie}/>} />
      </View>
    );
  }
}

class Movie extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <View style={styles.movieContainer}>
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
  movieList: {
    paddingTop: 20
  },
  container: {
    flex: 1
  },
  movieContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    fontSize: 16,
    marginBottom: 10
  },
  year: {
    fontSize: 10,
    color: '#404956'
  }

});
