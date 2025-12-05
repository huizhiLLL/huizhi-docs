import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import GitalkComments from './components/GitalkComments.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(GitalkComments)
    })
  }
}

