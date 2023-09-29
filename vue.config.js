const { defineConfig } = require('@vue/cli-service')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  chainWebpack: (config) => {
    config
      .plugin("VuetifyLoaderPlugin")
      .use(VuetifyLoaderPlugin)
      .tap(() => [
        {
          match(originalTag, { kebabTag, camelTag }) {
            if (kebabTag.startsWith("v-")) {
              return [camelTag, `import { ${camelTag} } from "vuetify/lib"`];
            }
          },
        },
      ]);

  }
})

