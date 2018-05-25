Object.defineProperty(exports,"__esModule",{value:true});var GET_MOVIES_URL='https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';function getMovies(callback){return fetch(GET_MOVIES_URL).then(function(res){return res.json();}).then(callback);}var Client={getMovies:getMovies};exports.default=Client;

//# sourceMappingURL=src\Client-compile.js.map