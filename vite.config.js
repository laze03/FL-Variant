import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000/",
      "/upload": "http://localhost:5000/",
      "/dashboard": "http://localhost:5000/",
      "/filters": "http://localhost:5000/",
    },
  },
  plugins: [react()],
  base: "FL-Variant",
});
