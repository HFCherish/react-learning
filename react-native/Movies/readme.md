参照 [官方教程](https://reactnative.cn/docs/0.51/sample-application-movies.html) 练习。

初步练习目标：

1. 各个章节学习+开发 - 90'
2. 独立开发一遍 - 1h
3. 独立开发一遍 - 30'

# 坑
## 在 iOS 上使用 http 链接的图片地址可能不会显示

大致意思是：iOS9 引入了新特性 App Transport Security (ATS)。详情：[App Transport Security (ATS)](https://developer.apple.com/library/prerelease/ios/releasenotes/General/WhatsNewIniOS/Articles/iOS9.html#//apple_ref/doc/uid/TP40016198-DontLinkElementID_13)

参照 [这篇说明修改](https://segmentfault.com/a/1190000002933776). 或者直接在 ios/Movies/info.plist 中添加：

```json
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```