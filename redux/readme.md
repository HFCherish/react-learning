---
title: redux
date: 2018-05-29 10:46:35
tags:
- react
---

# what's redux

[redux 中文文档](https://cn.redux.js.org/) 中的几个关键特性：

1. **状态容器**，提供**可预测化**的状态管理
2. 跨平台，客户端、服务端、原生应用都能用
3. 易于测试
4. 轻量，支持 react 等界面库

其中第一点，讲明了 redux 的主要用途：**状态容器**

以 react 为例，页面是渲染状态树得到，有静态状态（`props`）、动态状态（`state`）。通过在代码中修改 `state` 来修改状态树，状态自上而下传递到各个子组件，最终触发组件树的重新渲染。使用 redux，我们就将状态的定义和允许的迁移 function 挪出去，放到一个状态容器里，来有效管理组件的所有状态和状态迁移。

以计数器为例，不使用 redux，使用 local state：

```jsx
import React, {Component} from 'react';

export default class Counter extends Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  }
}
```

如果使用 redux：

```jsx

```


这个过程中：

1. **状态（model）、状态如何被改变（controller）、页面模板/html（view）是耦合在一块的。**<font color='gray'>（react 提供的就是一种界面库，render 函数其实写的就是页面模板，将 model 填充进去，渲染得到最后的 view）</font>
2. **组件之间强耦合，难以确定状态的改变是在哪里被谁触发，bug 追踪难。**

react 就是想要把

