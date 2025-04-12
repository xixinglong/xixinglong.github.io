---
title: Docker部署静态文件
date: 2024-03-15
tags:
  - Docker
  - 部署
categories:
  - 技术
  - 部署
excerpt: 本文详细介绍如何使用Docker容器化部署静态文件项目，包括创建项目目录、编写Dockerfile、打包镜像和运行容器的完整流程，适合前端开发者学习Docker部署实践。
---

# Docker 部署静态文件

## 简介

随着技术快速更新迭代，前端也需要熟悉 docker 容器化部署项目，下面主要分享静态文件 docker 容器部署

## 目录

- [1. 概述](#1-概述)
- [2. 主要内容](#2-主要内容)
  - [2.1 创建项目目录](#21-创建项目目录)
  - [2.2 打包镜像](#22-打包镜像)
  - [2.3 运行容器](#23-运行容器)
- [3. 结论](#3-结论)
- [4. 参考资料](#4-参考资料)

## 1. 概述

随着技术快速更新迭代，前端也需要熟悉 docker 容器化部署项目，下面主要分享静态文件 docker 容器部署，前提条件是掌握 html+css+js+docker 基础，linux 服务器或本地安装 docker，本文章不赘述 docker 安装流程。

## 2. 主要内容

### 2.1 创建项目目录

- 创建目录 hello-docker
- 创建 index.html
- 创建 Dockerfile

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>hello-docker</title>
  </head>
  <body>
    <div>docker 学习 hello-docker</div>
  </body>
</html>
```

```dockerfile
FROM nginx

COPY ./index.html /usr/share/nginx/html/index.html

EXPOSE 80
```

### 2.2 打包镜像

- cd hello-docker/ # 进入刚刚的目录
- docker image build ./ -t hello-docker:1.0.0 # 打包镜像 的意思是：基于路径./（当前路径）打包一个镜像，镜像的名字是 hello-docker，版本号是 1.0.0。该命令会自动寻找 Dockerfile 来打包出一个镜像

### 2.3 运行容器

- docker container create -p 8801:80 hello-docker:1.0.0
- docker container start xxx # xxx 为上一条命令运行得到的结果
- 127.0.0.1:8801 或者 ip:8801 可以查看到 index.html 内容

## 3. 结论

![Docker部署静态文件](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f85d42cb2104d739ad51a230f640ae7~tplv-k3u1fbpfcp-zoom-1.image)

## 4. 参考资料

博客：[https://xixl93.cn/?p=54](https://xixl93.cn/?p=54)
