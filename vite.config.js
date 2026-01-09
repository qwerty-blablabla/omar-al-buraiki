import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

export default defineConfig({
  base: "/omar-al-buraiki/",
  build: {
    outDir: "docs",
  },
  plugins: [
    react(),
    {
      name: "copy-404",
      closeBundle() {
        const outDir = "docs";
        const indexPath = join(outDir, "index.html");
        const notFoundPath = join(outDir, "404.html");
        try {
          const indexContent = readFileSync(indexPath, "utf-8");
          writeFileSync(notFoundPath, indexContent);
          console.log("✓ Copied index.html to 404.html");
        } catch (error) {
          console.error("Error copying 404.html:", error);
        }
      },
    },
  ],
});
