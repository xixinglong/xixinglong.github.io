---
title: 分类
description: 文章分类列表
---

# 文章分类

<script setup>
import { data as posts } from '../posts/posts.data.mjs'

const categories = {}
posts.forEach(post => {
  if (post.category) {
    if (!categories[post.category]) categories[post.category] = []
    categories[post.category].push(post)
  }
})
</script>

<div class="categories-wrapper">
  <div v-for="(posts, category) in categories" :key="category" class="category-group">
    <h2 :id="category" class="category-title">
      {{ category }}
      <span class="category-count">({{ posts.length }})</span>
    </h2>
    <ul class="category-posts">
      <li v-for="post in posts" :key="post.url">
        <a :href="post.url">{{ post.title }}</a>
        <span class="post-date">{{ post.date }}</span>
      </li>
    </ul>
  </div>
</div>

<style>
.categories-wrapper {
  margin-top: 2rem;
}

.category-group {
  margin-bottom: 2rem;
}

.category-title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.category-count {
  margin-left: 0.5rem;
  font-size: 1rem;
  color: var(--vp-c-text-2);
}

.category-posts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-posts li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.category-posts a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.category-posts a:hover {
  color: var(--vp-c-brand);
}

.post-date {
  margin-left: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>
