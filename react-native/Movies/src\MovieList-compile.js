Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='react-native/Movies/src/MovieList.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _Client=require('./Client');var _Client2=_interopRequireDefault(_Client);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MovieList=function(_Component){_inherits(MovieList,_Component);function MovieList(){var _ref;var _temp,_this,_ret;_classCallCheck(this,MovieList);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=MovieList.__proto__||Object.getPrototypeOf(MovieList)).call.apply(_ref,[this].concat(args))),_this),_this.state={movies:[],loaded:false},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(MovieList,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;_Client2.default.getMovies(function(json){_this2.setState({movies:_this2.state.movies.concat(json.movies),loaded:true});});}},{key:'render',value:function render(){var _this3=this;if(!this.state.loaded){return this.renderWaiting();}return _react2.default.createElement(_reactNative.View,{style:styles.listContainer,__source:{fileName:_jsxFileName,lineNumber:39}},_react2.default.createElement(_reactNative.FlatList,{data:this.state.movies,renderItem:function renderItem(_ref2){var movie=_ref2.item;return _this3.renderMovie(movie);},__source:{fileName:_jsxFileName,lineNumber:40}}));}},{key:'renderWaiting',value:function renderWaiting(){return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:47}},_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:48}},'\u6B63\u5728\u52A0\u8F7D\uFF0C\u8BF7\u7A0D\u7B49...'));}},{key:'renderMovie',value:function renderMovie(movie){return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:55}},_react2.default.createElement(_reactNative.Image,{source:{uri:movie.posters.thumbnail},style:styles.thumbnail,__source:{fileName:_jsxFileName,lineNumber:56}}),_react2.default.createElement(_reactNative.View,{style:styles.movieInfo,__source:{fileName:_jsxFileName,lineNumber:57}},_react2.default.createElement(_reactNative.Text,{style:styles.title,__source:{fileName:_jsxFileName,lineNumber:58}},movie.title),_react2.default.createElement(_reactNative.Text,{style:styles.year,__source:{fileName:_jsxFileName,lineNumber:59}},movie.year)));}}]);return MovieList;}(_react.Component);exports.default=MovieList;var styles=_reactNative.StyleSheet.create({listContainer:{flex:1,margin:20,marginTop:40,marginBottom:40},container:{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF',margin:10},thumbnail:{width:53,height:81},movieInfo:{flexDirection:'column',justifyContent:'center',alignItems:'flex-start',flex:1,marginLeft:20},title:{fontSize:16,textAlign:'left',marginBottom:10},year:{fontSize:12,textAlign:'center',color:'gray'}});

//# sourceMappingURL=src\MovieList-compile.js.map