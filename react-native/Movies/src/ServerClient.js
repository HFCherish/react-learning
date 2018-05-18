const FETCH_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

function getMovies(callback){
  return fetch(FETCH_URL)
    .then((response) => response.json())
    .then(callback);
}

const ServerClient = {getMovies}
export default ServerClient;