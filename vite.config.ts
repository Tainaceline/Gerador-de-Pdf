import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 Troque "geomk-task-report" pelo nome EXATO do seu repositório no GitHub
  base: "/Gerador-de-Pdf/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
