---
title: Docker 常用命令
date: 2023-10-01
tags: ["Docker"]
categories: ["技术教程"]
excerpt: 本文整理了Docker的常用命令及其简要说明。
---

# Docker 常用命令

## 1. 概述

Docker 是一个开源的应用容器引擎，它允许开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。下面是一些 Docker 的常用命令及其简要说明：

## 2. Docker 服务管理

```
systemctl start docker：启动 Docker 服务。
systemctl stop docker：停止 Docker 服务。
systemctl restart docker：重启 Docker 服务。
systemctl status docker：检查 Docker 服务的状态。
systemctl enable docker：设置 Docker 在系统启动时自动启动。
```

## 3. Docker 镜像管理

```
docker images：列出本地的所有镜像。
docker pull <image_name>:<tag>：从 Docker Hub 下载镜像。
docker build -t <image_name>:<tag> .：构建一个新的镜像。
docker rmi <image_id>：删除一个镜像。
docker rmi -f $(docker images -q)：删除所有镜像。
```

## 4. Docker 容器管理

```
docker ps：列出所有正在运行的容器。
docker ps -a：列出所有的容器（包括停止的）。
docker run <image_name>:<tag>：运行一个容器。
docker stop <container_id>：停止一个运行中的容器。
docker start <container_id>：启动一个已停止的容器。
docker rm <container_id>：删除一个容器。
docker logs <container_id>：查看容器的日志输出。
docker exec -it <container_id> /bin/bash：进入一个正在运行的容器。
```

## 5. Docker 网络管理

```
docker network ls：列出所有网络。
docker network create <network_name>：创建一个新的网络。
docker network connect <network_name> <container_id>：将容器连接到网络。
docker network disconnect <network_name> <container_id>：将容器从网络断开。
docker network rm <network_name>：删除一个网络
```

## 6. Docker 卷管理

```
docker volume ls：列出所有卷。
docker volume create <volume_name>：创建一个新的卷。
docker volume rm <volume_name>：删除一个卷。
docker volume inspect <volume_name>：查看卷的详细信息。
```

## 7. Docker 其他命令

```
docker info：显示 Docker 系统信息。
docker version：显示 Docker 版本信息。
docker system prune：清理所有未使用的资源，包括镜像、容器、网络和卷。
```

## 8. Docker Compose

Docker Compose 是用于定义和运行多容器 Docker 应用程序的工具。以下是 Docker Compose 的一些常用命令：

```
docker-compose up：构建、（重新）创建、启动，并链接到应用程序的服务。
docker-compose down：停止并删除容器、网络、数据卷和镜像。
docker-compose build：构建或重新构建服务。
docker-compose start：启动已创建的服务容器。
docker-compose stop：停止服务容器。
docker-compose restart：重启服务容器。
docker-compose logs：查看服务容器的日志。
docker-compose ps：列出容器的状态。
docker-compose scale：设置服务容器的数量。
```

## 9.Docker Swarm

Docker Swarm 是 Docker 的集群管理工具，用于管理跨多个主机的 Docker 容器和服务。以下是一些 Docker Swarm 的常用命令：

```
docker swarm init：初始化一个 Swarm 管理节点。
docker swarm join：加入一个 Swarm 集群。
docker service create：创建一个服务。
docker service ls：列出服务。
docker service rm：移除一个服务。
docker node ls：列出节点。
docker node rm：移除一个节点。
```

## 10.Dockerfile

Dockerfile 是一个文本文件，其中包含了一系列的指令，用户可以调用 docker build 命令来创建一个镜像。以下是一些常见的 Dockerfile 指令：

```
FROM：指定基础镜像。
RUN：运行任意合法的 shell 命令。
CMD：设置容器启动时默认执行的命令。
EXPOSE：暴露端口。
ENV：设置环境变量。
ADD：从本地文件系统添加文件到镜像。
COPY：复制文件或目录到镜像。
WORKDIR：设置工作目录。
VOLUME：创建数据挂载点。
LABEL：添加元数据到镜像。
```

## 11.Docker 登录和认证

```
docker login：登录 Docker Hub 或私有仓库。
docker logout：登出 Docker Hub 或私有仓库。
docker save：将镜像保存为 tar 文件。
docker load：从 tar 文件加载镜像。
```

## 12.Docker 安全和策略

```
docker trust：用于管理 Docker 内容的信任和签名，确保镜像的安全性。
docker content-trust sign：对 Docker 镜像进行签名，以验证其来源。
docker content-trust verify：验证 Docker 镜像的签名。
```

## 13.Docker 与 Kubernetes (K8s) 集成

虽然 Docker 本身主要用于容器化和运行单一应用，但在生产环境中，Docker 容器往往会被部署在 Kubernetes 这样的容器编排平台上。以下是一些与 Kubernetes 相关的 Docker 命令和概念：

```
kubectl：Kubernetes 的命令行工具，用于部署、维护和管理 Kubernetes 集群上的容器化应用。
kubectl apply -f <filename>.yaml：使用 YAML 文件中的配置创建或更新 Kubernetes 资源。
kubectl get pods：列出 Kubernetes 集群中的所有 Pod。
kubectl describe pod <pod-name>：显示 Pod 的详细信息。
kubectl logs <pod-name>：获取 Pod 中容器的日志。
kubectl port-forward <pod-name> <local-port>:<container-port>：在本地机器和 Pod 之间建立端口转发。
```

## 14.Docker 高级主题

```
docker context：管理多个 Docker 主机或集群的上下文。
docker secrets：用于管理敏感数据，如密码和密钥，可以在容器中安全地使用。
docker stack：使用 Docker Compose 文件在 Swarm 模式下部署和管理服务。
```

## 15.Docker 问题排查

```
docker stats：显示所有容器的资源使用情况，如 CPU、内存、网络 I/O 和块 I/O。
docker events：实时监控 Docker 事件，如容器的启动、停止、重建等。
docker system df：显示 Docker 系统的磁盘使用情况，包括镜像、容器、网络驱动和卷。
```

## 参考资料

[命令帮助文档:](https://docs.docker.com/engine/reference/commandline/docker/)
