import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // Use repo name only for production builds
  base: process.env.NODE_ENV === "production" ? "/My-Portfolio-Website/" : "/",
  resolve: {
    alias: {
      "@": "/src", // optional: lets you import like "@/components/Component"
    },
  },
});
