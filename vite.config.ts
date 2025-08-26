import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Fonts from "unplugin-fonts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: "declarations/components.d.ts",
      resolvers: [IconsResolver({ prefix: false })],
    }),
    Icons({
      defaultClass: "inline-block size-4 text-gray-500",
    }),
    Fonts({
      google: {
        preconnect: true,
        families: [{ name: "Roboto", styles: "wght@400;500;600;700" }],
      },
    }),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["axe-core"],
  },
});
