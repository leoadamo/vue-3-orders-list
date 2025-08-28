// DEPENDENCIES
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Fonts from "unplugin-fonts/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      vue(),
      Components({
        dts: "declarations/components.d.ts",
      }),
      Icons({
        customCollections: {
          "app-icons": FileSystemIconLoader("./src/assets/icons", (svg) =>
            svg.replace(/^<svg /, '<svg class="inline-block text-current" '),
          ),
        },
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
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
