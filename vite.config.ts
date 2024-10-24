import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "src/features"),
      "@common": path.resolve(__dirname, "src/common"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
