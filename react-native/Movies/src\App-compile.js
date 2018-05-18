Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='react-native/Movies/src/App.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _ServerClient=require('./ServerClient');var _ServerClient2=_interopRequireDefault(_ServerClient);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MOCKED_MOVIES=[{title:'Flipped',year:2010,posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}}];var instructions=_reactNative.Platform.select({ios:'Press Cmd+R to reload,\n'+'Cmd+D or shake for dev menu',android:'Double tap R on your keyboard to reload,\n'+'Shake or press menu button for dev menu'});var App=function(_Component){_inherits(App,_Component);function App(){var _ref;var _temp,_this,_ret;_classCallCheck(this,App);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=App.__proto__||Object.getPrototypeOf(App)).call.apply(_ref,[this].concat(args))),_this),_this.state={data:[],loaded:false},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(App,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;_ServerClient2.default.getMovies(function(json){_this2.setState({data:_this2.state.data.concat(json.movies),loaded:true});});}},{key:'renderLoadingView',value:function renderLoadingView(){return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:55}},_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:56}},'\u6B63\u5728\u52A0\u8F7D\u7535\u5F71\u6570\u636E...'));}},{key:'render',value:function render(){if(!this.state.loaded){return this.renderLoadingView();}return _react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:67}},_react2.default.createElement(_reactNative.FlatList,{style:styles.movieList,data:this.state.data,renderItem:function renderItem(_ref2){var item=_ref2.item;return _react2.default.createElement(Movie,{movie:item,__source:{fileName:_jsxFileName,lineNumber:69}});},__source:{fileName:_jsxFileName,lineNumber:69}}));}}]);return App;}(_react.Component);exports.default=App;var Movie=function(_Component2){_inherits(Movie,_Component2);function Movie(){_classCallCheck(this,Movie);return _possibleConstructorReturn(this,(Movie.__proto__||Object.getPrototypeOf(Movie)).apply(this,arguments));}_createClass(Movie,[{key:'render',value:function render(){var movie=this.props.movie;return _react2.default.createElement(_reactNative.View,{style:styles.movieContainer,__source:{fileName:_jsxFileName,lineNumber:79}},_react2.default.createElement(_reactNative.Image,{source:{uri:movie.posters.thumbnail},style:styles.thumbnail,__source:{fileName:_jsxFileName,lineNumber:80}}),_react2.default.createElement(_reactNative.View,{style:styles.rightContainer,__source:{fileName:_jsxFileName,lineNumber:82}},_react2.default.createElement(_reactNative.Text,{style:styles.title,__source:{fileName:_jsxFileName,lineNumber:83}},movie.title),_react2.default.createElement(_reactNative.Text,{style:styles.year,__source:{fileName:_jsxFileName,lineNumber:84}},movie.year)));}}]);return Movie;}(_react.Component);var styles=_reactNative.StyleSheet.create({movieList:{paddingTop:20},container:{flex:1},movieContainer:{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'},rightContainer:{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'},thumbnail:{width:53,height:81},title:{fontSize:16,marginBottom:10},year:{fontSize:10,color:'#404956'}});

//# sourceMappingURL=src\App-compile.js.map