---
title: 文章列表
description: 所有技术博客文章
---

# 文章列表

这里将显示所有的技术博客文章，按照发布时间排序。每篇文章都会包含标题、发布日期、分类和标签信息。

<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<div class="post-list">
  <div v-for="post in posts" :key="post.url" class="post-item">
    <h2 class="post-title">
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <div class="post-meta">
      <span class="post-date">{{ post.date }}</span>
      <span class="post-category" v-if="post.category">
        分类：<a :href="`/categories/${post.category}`">{{ post.category }}</a>
      </span>
      <span class="post-tags" v-if="post.tags && post.tags.length">
        标签：
        <a v-for="tag in post.tags" :key="tag" :href="`/tags/${tag}`" class="post-tag">
          {{ tag }}
        </a>
      </span>
    </div>
    <div class="post-excerpt" v-if="post.excerpt">
      {{ post.excerpt }}
    </div>
  </div>
</div>

<style>
.post-list {
  margin-top: 2rem;
}

.post-item {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-title {
  margin: 0;
  font-size: 1.5rem;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-title a:hover {
  color: var(--vp-c-brand);
}

.post-meta {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.post-meta > span {
  margin-right: 1rem;
}

.post-tag {
  margin-right: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  font-size: 0.8rem;
  text-decoration: none;
}

.post-tag:hover {
  background-color: var(--vp-c-brand-mute);
}

.post-excerpt {
  margin-top: 1rem;
  color: var(--vp-c-text-2);
}
</style>
