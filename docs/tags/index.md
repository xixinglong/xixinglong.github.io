---
title: 标签
description: 文章标签云
---

# 标签云

<script setup>
import { data as posts } from '../posts/posts.data.mjs'

const tags = {}
posts.forEach(post => {
  if (post.tags) {
    post.tags.forEach(tag => {
      if (!tags[tag]) tags[tag] = []
      tags[tag].push(post)
    })
  }
})
</script>

<div class="tags-wrapper">
  <div v-for="(posts, tag) in tags" :key="tag" class="tag-group">
    <h2 :id="tag" class="tag-title">
      {{ tag }}
      <span class="tag-count">({{ posts.length }})</span>
    </h2>
    <ul class="tag-posts">
      <li v-for="post in posts" :key="post.url">
        <a :href="post.url">{{ post.title }}</a>
        <span class="post-date">{{ post.date }}</span>
      </li>
    </ul>
  </div>
</div>

<style>
.tags-wrapper {
  margin-top: 2rem;
}

.tag-group {
  margin-bottom: 2rem;
}

.tag-title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.tag-count {
  margin-left: 0.5rem;
  font-size: 1rem;
  color: var(--vp-c-text-2);
}

.tag-posts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-posts li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.tag-posts a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.tag-posts a:hover {
  color: var(--vp-c-brand);
}

.post-date {
  margin-left: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>
