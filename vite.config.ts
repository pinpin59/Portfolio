// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-fallback",
      generateBundle(_, bundle) {
        if (bundle["index.html"]) {
          bundle["404.html"] = { ...bundle["index.html"] };
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
