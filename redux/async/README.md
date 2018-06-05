This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# 不使用 redux 实现一遍

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

# 使用 redux 重写