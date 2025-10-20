import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
   base: '/My-Portfolio-Website/', // <-- this is your repo name
  resolve: {
    alias: {
      "@": "/src", // optional: lets you import like "@/components/Component"
    },
  },
});
