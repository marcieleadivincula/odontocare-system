/// <reference types="vitest" /> // [!code ++]
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    // [!code ++]
    globals: true, // [!code ++]
    environment: "jsdom", // [!code ++]
    setupFiles: "./src/test/setup.ts", // [!code ++]
  }, // [!code ++]
});
