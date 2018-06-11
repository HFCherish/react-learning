This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

对照 [react example](https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/async) 练习（[git 源码](https://github.com/reduxjs/redux/tree/master/examples/async)）

# 不使用 redux 实现一遍

代码见 `without_redux`

1. 能静态显示页面，构建所有组件框架
1. 初始化后，能从服务端获取数据
2. 实现根据 selectedSubreddit 从服务器拉数据显示
3. 实现 refresh 操作
4. 添加缓存：使用缓存的有效 data；当 refresh 时，之前的 data 会置为无效
    1. 添加 cachedPosts 状态作为本地缓存（包含 posts、isFetching、lastUpdated 等），加载数据都从缓存中加载
    2. 删除原有的 posts、isFetching、lastUpdated
    3. 根据缓存数据状态加载数据
5. 当过了特定时间（1h）之前的 data 会置为无效

# 使用 redux 修改

代码见 `to_redux`

1. 识别 actions（根据现有代码中的 `setState` 调用）：
    * invalidateSubreddit
    * requestPost
    * receivePost
    * fetchPostsIfNeeded
    * selectSubreddit
2. 拆分 reducers（可根据 `state` 层级拆分，根据根属性，拆俩）
    * 处理 selectSubreddit 的 reducer（更改 selectedSubreddit）
    * 处理 cachedPosts 的 reducer（更改 cachedPosts）
1. 先将 selectSubreddit 状态拆分出去，由 redux 管理
    * connect redux store，可以连接 store state 和 app state
    * 分别设计实现 reducer、action

# 使用 redux 重写

代码见 `with_redux`