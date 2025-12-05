<template>
  <div class="gitalk-wrapper">
    <div v-if="!isReady" class="gitalk-missing">
      请在 config.mjs 的 themeConfig.gitalk 中填入 clientID、clientSecret、repo、owner、admin。
    </div>
    <div v-else :id="containerId" ref="containerEl"></div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'

const route = useRoute()
const { theme, page } = useData()
const containerId = 'gitalk-container'
const isReady = ref(false)
const containerEl = ref(null)

const renderGitalk = async () => {
  const cfg = theme.value.gitalk || {}
  const requiredKeys = ['clientID', 'clientSecret', 'repo', 'owner', 'admin']
  const missingRequired = requiredKeys.some((key) => {
    const value = cfg[key]
    if (Array.isArray(value)) return value.length === 0
    return !value
  })

  if (missingRequired) {
    isReady.value = false
    return
  }

  isReady.value = true

  await nextTick()
  const container = containerEl.value
  if (!container) return
  container.innerHTML = ''

  const gitalk = new Gitalk({
    ...cfg,
    id: (page.value.relativePath || route.path || '').slice(0, 49) || route.path,
    title: page.value.title || document.title,
    body: window.location.href
  })

  gitalk.render(containerId)
}

onMounted(() => {
  renderGitalk()

  watch(
    () => route.path,
    () => {
      renderGitalk()
    }
  )
})
</script>

<style scoped>
.gitalk-wrapper {
  margin-top: 2rem;
}

.gitalk-missing {
  font-size: 14px;
  color: #888;
  padding: 12px 0;
}
</style>

