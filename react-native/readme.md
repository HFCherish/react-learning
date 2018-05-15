[TOC]

# what is react native？
## [native, web, or hybrid apps](https://www.mobiloud.com/blog/native-web-or-hybrid-apps/)
首先需要了解 `native` 的含义。

### native app

native 主要指 native 应用，即基于智能手机本地操作系统（ios、andriod、wp）并使用原生程序（object-c 等）编写的第三方程序。也就是手机应用，如 facebook、wechat 等。

native apps 直接基于底层操作系统，速度会更快一些。但是：

1. ios、andriod 技术不同，学习、开发成本高（一个应用，至少要开发两个版本）
2. 而且在 app store / google play 上传应用，第一会收取 distribution 费用，第二更新审核很慢

### web app

web app 是为弥补 native app 的缺陷而产生的新名词。web app 和 website 类似，都是通过浏览器访问，但是提供了更多用户交互功能。

以 youtube 为例，左图是 web app，右图是 native app

<p align="center">
<img src="https://www.hkitblog.com/wp-content/uploads/2015/11/Webapp_20151109_01.jpg" width="500px">
</p>

web app 相对 native 要慢一些，因为它隔着一层浏览器。但：

1. 学习、开发成本低：使用 JavaScript、css、html 开发一套，就可以在各种平台（web、ios、android）运行
2. 不用考虑 app store 等的收费和审核

### hybrid app

hybrid app 顾名思义是介于 native、web 之间的一种。它以 native app 的形式发布（包了一个客户端壳），但其实质是一个 web app，网址是固定的

如果想做个 MVP 的移动端产品，就可以做 hybrid app，模拟一个 native app 的用户体验，并调研用户的使用反馈，成本低。

hybrid 似乎是一个集大成的产品，但是：

1. 性能和 web app 差不多，其实都是基于 webview 组件做，性能受 webview 影响
2. 开发成本不一定低。毕竟还是要套壳，还存在多平台问题，且视复杂程度看，成本不一定低

## [react native](https://reactnative.cn/)

react native，顾名思义，是用 react 写 native app（原本都是用 object-c、kotlin 等），它有如下特性：

1. [跨平台（learn once, write anywhere）](#learn-once): 即所有的平台都可以使用 react + JavaScript 来开发，也可以使用原生组件的封装组件 —— 可以有平台一致的 ui/用户体验
2. 享受 react 所提供的高效开发、组件化开发等特性，和 javascript + react 一致的开发体验
3. 开发的还是 native app，效率通过异步执行做了优化。因为现阶段 web app 体验还是不如 native app，所以 facebook 更强调 `learn once, write anywhere`


设计理念：

>**既拥有Native的用户体验、又保留React的开发效率**

### <a name=learn-once></a> 1. learn once，write anywhere（跨平台）

react native 的简单框架见下图：在不同的平台上（web、ios、android）上，用户编写基于 react 的代码，操作的是 virtual dom（lightweight representation of the document）。通过**不同的渲染引擎**生成不同平台下的 UI，**JS 和 native 之间通过 bridge 通信**

<p align="center">
<img src="https://upload-images.jianshu.io/upload_images/2428275-29d1662bcaddbcc2.png" width="300px" />
</p>

react native 对原生组件（eg. ios 的 `UITabBar` 和 Android 的 `Drawer`）作了封装，使用对应的React component，就可以轻松地把这些原生组件整合到你的React Native应用中， 例如TabBarIOS和DrawerLayoutAndroid。

### 组件化开发

react native 类似于 react，但是使用 native components，而不是 web components（eg. h2, div 等）

# learning targets/steps
>1. get started  
>	* 使用 `create react native app` 创建并在 iphone 上运行，update 项目  
>	* 本地搭建环境，使用 ios simulator 运行 app，update 项目  
>2. VSCode IDE 安装配置
>2. basics 学习
>	* 官网 the basics 章节
>	* 官网 components & apis 学习
>3. 官方例子
>	* [movie list](https://reactnative.cn/docs/0.51/sample-application-movies.html)
>	* [UIExployer](http://www.lcode.org/%E3%80%90react-native%E5%BC%80%E5%8F%91%E3%80%91react-native%E9%85%8D%E7%BD%AE%E8%BF%90%E8%A1%8C%E5%AE%98%E6%96%B9%E4%BE%8B%E5%AD%90-%E5%88%9D%E5%AD%A6%E8%80%85%E7%9A%84%E7%A6%8F%E9%9F%B38/)（mac os 版本）
>4. 实战学习
>	* [电影数据 app](http://www.lcode.org/react-native-movie-fetcher/)
>	* [微信好友分享功能](http://www.lcode.org/%e8%b6%85%e8%af%a6%e7%bb%86react-native%e5%ae%9e%e7%8e%b0%e5%be%ae%e4%bf%a1%e5%a5%bd%e5%8f%8b%e6%9c%8b%e5%8f%8b%e5%9c%88%e5%88%86%e4%ba%ab%e5%8a%9f%e8%83%bd-androidios%e5%8f%8c%e5%b9%b3%e5%8f%b0/)
>	* product 管理 app（using shoppify backend）

## start using create react native app
参照[官方教程 quick start](https://facebook.github.io/react-native/docs/getting-started.html) 即可。

```sh
# 安装
$ npm install -g create-react-native-app

# 创建 project
$ create-react-native-app ReactNativeHelloWorld

# 运行 project，启动 server
$ cd ReactNativeHelloWorld
$ yarn start
```

在 device 上运行，需要安装 `expo`。以 ios 为例，app store 下载安装 `expo` 后。在上述 project terminal 中，根据命令行指示：

> Press s to send the app URL to your phone number or email address

其中手机号需要 `+86`。手机收到短信后，点击链接就会在 expo 中打开 project。摇动手机来切换 app 界面和 expo 界面。另外可以直接利用 `toggle element inspector` 调试程序

## start using local development env

参照[官方教程 quick start](https://facebook.github.io/react-native/docs/getting-started.html) 即可。

```sh
# 安装
$ brew install node
# watchmans 是监控更新用的
$ brew install watchman
# command line interface
$ npm install -g react-native-cli
# 安装 XCode（app store）
# 安装 XCode command line tools

# 创建 project
$ react-native init ReactNativeHelloWorld

# 运行 project，启动 server，在 ios simulator 中运行
$ cd ReactNativeHelloWorld
$ react-native run-ios
```

#### 在 ios simulator 运行

可以直接使用 react-native-cli：`react-native run-ios` 运行，也可以在 xcode 运行：

1. 双击打开 `ios/ReactNativeHelloWorld2.xcodeproj`，这会在 xcode 中打开项目
2. 在下图所示的蓝框中选择需要模拟的 iphone 版本
3. 点击左侧的运行按钮，编译运行。会启动一个 simulator

<p align="center">
<img src="https://upload-images.jianshu.io/upload_images/721960-928194b80edf6248.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width="500px">
</p>

<p align="center" style="color:gray"><i>xcode 运行框</i></p>


#### 在 device 真机运行

还是用 xcode：

1. 双击打开 `ios/ReactNativeHelloWorld2.xcodeproj`，这会在 xcode 中打开项目
1. 使用 usb 链接 iphone 和 mac
2. 如果是第一次连真机，需要在 xcode 中选择：product -》 destination -》自己的设备，这将注册自己的机器给 xcode，作为 dev 用机器
3. 如果是第一次连真机，需要配置代码注册。
	4. 拥有一个 [apple developer account](https://developer.apple.com/)
	5. 在 xcode 中双击选择项目 target，general -》signing 部分添加上述 developer account 信息
	6. 继续选择 test target（下图蓝框部分），重复上述操作
7. 点击运行按钮，编译运行（手机需要设置信任这个开发者账户，跟随提示操作即可）


<p align="center">
<img src="https://upload-images.jianshu.io/upload_images/721960-8f980679655546c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" width=800>
</p>

<p align="center" style="color:gray"><i>xcode code signing</i></p>
