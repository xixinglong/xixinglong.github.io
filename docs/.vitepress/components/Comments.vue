<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import Giscus from '@giscus/vue'

const { isDark } = useData()
const theme = computed(() => isDark.value ? 'dark' : 'light')
</script>

<template>
  <div class="comments">
    <Giscus
      repo="xixinglong/xixinglong.github.io"
      repoId=""
      category="General"
      categoryId=""
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      :theme="theme"
      lang="zh-CN"
    />
  </div>
</template>

<style scoped>
.comments {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>