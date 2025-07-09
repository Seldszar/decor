import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';

export default defineConfig({
  plugins: [pluginPreact()],

  html: {
    title: "Decor: Theme Editor",

    tags: [
      {
        tag: "meta",
        attrs: {
          name: "description",
          content: "Yet another Discord Streamkit Overlay theme editor",
        },
      },
    ],
  },
});
