---
title: Docker部署Node项目
date: 2024-03-15
tags:
  - Docker
  - Node.js
  - 部署
categories:
  - 技术
  - 部署
excerpt: 本文详细介绍如何使用Docker容器化部署Node项目，包括创建项目目录、编写Dockerfile、打包镜像和运行容器的完整流程，适合前端开发者学习Docker部署实践。
---

# Docker 部署 Node 项目

## 简介

随着技术快速更新迭代，前端也需要熟悉 docker 容器化部署项目，下面主要分享 node 项目 docker 容器部署

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

### 2.1 创建项目目录名称 如 react-docker

- 使用 create-react-app 创建 react 项目
- 创建 Dockerfile

```dockerfile
FROM node:14.5.0
COPY . /react-docker/

WORKDIR /react-docker/

RUN rm -rf /react-docker/node_modules
RUN npm config set registry https://registry.npm.taobao.org && npm i

EXPOSE  3000

CMD npm run start
```

### 2.2 打包镜像

- cd hello-docker/ # 进入刚刚的目录
- docker image build ./ -t hello-docker:1.0.0 # 打包镜像 的意思是：基于路径./（当前路径）打包一个镜像，镜像的名字是 hello-docker，版本号是 1.0.0。该命令会自动寻找 Dockerfile 来打包出一个镜像

### 2.3 运行容器

- docker container create -p 8082:3000
- docker container start xxx # xxx 为上一条命令运行得到的结果
- 127.0.0.1:8801 或者 ip:8801 可以查看到 index.html 内容

## 3. 结论

![Docker部署Node项目](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42511c5ac2da4ee1b7392fcdbadcae97~tplv-k3u1fbpfcp-zoom-1.image)

## 4. 参考资料

博客：[https://xixl93.cn/?p=78](https://xixl93.cn/?p=78)
