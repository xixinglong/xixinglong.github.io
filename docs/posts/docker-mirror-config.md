---
title: Docker 镜像加速配置
date: 2023-10-01
tags: ["Docker"]
categories: ["技术教程"]
excerpt: 本文介绍如何配置Docker镜像加速以提高镜像拉取速度。
---

# Docker 镜像加速配置

## 概述

Docker 镜像的拉取速度可能会受到网络条件的影响，尤其是在中国大陆地区，由于网络环境的特殊性，直接从 Docker Hub 或其他国际源拉取镜像可能会非常缓慢。为了解决这个问题，许多云服务商提供了 Docker 镜像加速服务，其中最常用的包括阿里云、腾讯云、华为云等。

## 常用镜像加速服务

以下是常用的 Docker 镜像加速服务列表：

```json
{
  "registry-mirrors": [
    "https://docker.211678.top",
    "https://docker.1panel.live",
    "https://hub.rat.dev",
    "https://docker.m.daocloud.io",
    "https://do.nark.eu.org",
    "https://dockerpull.com",
    "https://dockerproxy.cn",
    "https://docker.awsl9527.cn"
  ]
}
```

## 配置方法

1. 创建或编辑 `/etc/docker/daemon.json` 文件
2. 添加或修改 `registry-mirrors` 字段，填入所需的镜像加速地址
3. 保存文件并重启 Docker 服务

```bash
sudo systemctl restart docker
```

## 参考资料

[Docker 官方文档](https://docs.docker.com/registry/recipes/mirror/)
