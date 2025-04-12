---
title: Hello World - 我的第一篇博客
date: 2024-01-01
category: 技术分享
tags: [VitePress, 博客搭建, 前端]
excerpt: 这是一篇示例文章，展示了如何使用 VitePress 搭建个人技术博客，包括文章格式、Markdown 语法、代码高亮等功能。
---

# Hello World - 我的第一篇博客

欢迎来到我的技术博客！这是一篇示例文章，用于展示博客的各项功能。

## Markdown 语法支持

### 文本格式化

支持常见的文本格式化：

- **粗体文本**
- _斜体文本_
- ~~删除线~~
- `行内代码`

### 列表

有序列表：

1. 第一项
2. 第二项
3. 第三项

无序列表：

- 项目一
- 项目二
- 项目三

### 引用

> 这是一段引用文本。
>
> 支持多行引用。

## 代码高亮

```javascript
// 代码高亮示例
function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting("World"));
```

```python
# Python 代码示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

## 表格支持

| 特性     | 描述         | 支持情况 |
| -------- | ------------ | -------- |
| Markdown | 基础语法     | ✅       |
| 代码高亮 | 多语言支持   | ✅       |
| 响应式   | 适配多种设备 | ✅       |
| 深色模式 | 自动切换     | ✅       |

## 图片支持

![示例图片](https://source.unsplash.com/random/800x400)

## 评论系统

在文章底部，我们集成了基于 GitHub Discussions 的 Giscus 评论系统，欢迎留下你的想法和建议！

<div class="giscus"></div>
