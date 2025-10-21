import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // Use the repo-base only in production so `npm run dev` works locally
  base: process.env.NODE_ENV === "production" ? "/My-Portfolio-Website/" : "./",
  resolve: {
    alias: {
      "@": "/src", // optional: lets you import like "@/components/Component"
    },
  },
});
