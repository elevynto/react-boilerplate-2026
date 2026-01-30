import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // Enables global test functions like `describe`, `it`, etc.
    environment: "jsdom", // Sets the test environment to JSDOM for React components
    setupFiles: "./vitest.setup.ts", // Optional: Path to a setup file for global configurations
  },
});
