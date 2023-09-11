import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/fonts-css": {
        target: "https://fonts.googleapis.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fonts-css/, ""),
      },
    },
  },
});
