import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // поддержка синтаксиса React (JSX и прочее)
    react(),
    // генерация файла `index.d.ts`
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // путь к основному файлу библиотеки
      entry: "./src/lib/index.ts",
      // название библиотеки
      name: "ReactTSLib",
      // форматы генерируемых файлов
      formats: ["es", "umd"],
      // названия генерируемых файлов
      fileName: (format) => `vkid-react-sdk.${format}.js`,
    },
    // https://vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
