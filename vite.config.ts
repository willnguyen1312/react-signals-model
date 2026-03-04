import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
  plugins: [
    Inspect(),
    react({
      babel: {
        // plugins: [["module:@preact/signals-react-transform"]],
      },
    }),
  ],
});
