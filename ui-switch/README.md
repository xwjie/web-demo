# 组件库切换

## element-plus为什么多了一个unplugin-auto-import

devui库就不需要？

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, DevUiResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), Inspect(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), DevUiResolver()],
    }),
  ],
})
```