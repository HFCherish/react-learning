Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='react-native/Movies/src/MovieList.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MOVIES=[{title:'test',year:2394,posters:{thumbnail:'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'}},{title:'test1',year:2394,posters:{thumbnail:'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'}}];var MovieList=function(_Component){_inherits(MovieList,_Component);function MovieList(){_classCallCheck(this,MovieList);return _possibleConstructorReturn(this,(MovieList.__proto__||Object.getPrototypeOf(MovieList)).apply(this,arguments));}_createClass(MovieList,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement(_reactNative.FlatList,{data:MOVIES,renderItem:function renderItem(_ref){var movie=_ref.item;return _this2.renderMovie(movie);},__source:{fileName:_jsxFileName,lineNumber:34}}));}},{key:'renderMovie',value:function renderMovie(movie){return _react2.default.createElement(_reactNative.View,{style:styles.movieContainer,__source:{fileName:_jsxFileName,lineNumber:41}},_react2.default.createElement(_reactNative.Image,{source:{uri:movie.posters.thumbnail},style:styles.thumbnail,__source:{fileName:_jsxFileName,lineNumber:42}}),_react2.default.createElement(_reactNative.View,{style:styles.movieInfo,__source:{fileName:_jsxFileName,lineNumber:43}},_react2.default.createElement(_reactNative.Text,{style:styles.title,__source:{fileName:_jsxFileName,lineNumber:44}},movie.title),_react2.default.createElement(_reactNative.Text,{style:styles.year,__source:{fileName:_jsxFileName,lineNumber:45}},movie.year)));}}]);return MovieList;}(_react.Component);exports.default=MovieList;var styles=_reactNative.StyleSheet.create({container:{flex:1,margin:20},movieInfo:{flex:1,justifyContent:'center',alignItems:'flex-start',backgroundColor:'#F5FCFF',marginLeft:20},movieContainer:{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',margin:5},thumbnail:{width:53,height:81},title:{fontSize:16,textAlign:'left'},year:{fontSize:12,color:'gray'}});

//# sourceMappingURL=src\MovieList-compile.js.map