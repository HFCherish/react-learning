const GET_MOVIES_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

function getMovies(callback) {
  return fetch(GET_MOVIES_URL)
    .then(res => res.json())
    .then(callback);
}

const Client = {getMovies};
export default Client;